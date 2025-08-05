const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config');


function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            msg: "Invalid Token / Input."
        });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.userId = decoded.userId;;
        req.firstname = decoded.firstname;
        req.lastname = decoded.lastname;
        req.username = decoded.username;

        next();
    } catch(err) {
        return res.status(403).json({
            msg: "Unknown JWT Token occured, check your JWT Token."
        });
    }
}

module.exports = {
    authMiddleware
}