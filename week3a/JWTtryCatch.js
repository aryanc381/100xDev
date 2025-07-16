const jwt = require("jsonwebtoken")

try {
   const value = {
    name: "Aryan",
    accountNumber: 143143
    } 
    const token = jwt.sign(value, "secretKey")
    console.log("THE TOKEN IS: " + token);
    
    const resp = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXJ5YW4iLCJhY2NvdW50TnVtYmVyIjoxNDMxNDMsImlhdCI6MTc1MjA3MTk4N30.dUAD0dNQVF2l6mgKtpHNJGQbmDKFgtn_bZWmfQQcTe8", "secretKey")
    console.log("VERIFICATION SUCCESS: " + resp);
} catch(e) {
    console.log("VEIFICATION FAILED: This is from inside the catch");
}

console.log("outside the loop as try catch safeguarded the code");





