/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  DONE 1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const express = require("express")
const PORT = 3000;
const app = express();
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

app.use(express.json());

let users = [];
let currentId = 1;

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const secret = req.body.secret;
  // creating the fuckin user object
  const user = ({
    id: currentId++,
    username: username,
    password: password,
    firstName: firstName,
    lastName: lastName,
    secret: secret
  })
  for(let i = 0; i < users.length; i++) {
    if(users[i].username === user.username) {
      return res.status(400).json({
        msg: "User exists"
      });
    }
  }
  users.push(user);
  res.status(201).json({
    id: user.id,
    username: username,
    msg: `Account for ${firstName} has been created`,
    token: `Your secret [${secret}] is safe with me heehaahuheehaahuu`
  }); 
});

app.get("/data", (req, res) => {
  let firstName = []
  let user_id = []
  for(let i =0; i < users.length; i++) {
    firstName.push(users[i].firstName);
    user_id.push(users[i].id);
  }
  res.status(200).json({
    firstName: firstName,
    userID: user_id,
    
  });
});

app.post("/login", (req, res) => {
  const id = req.body.id;
  const username = req.body.username;
  const pass = req.body.pass;

  for(let i = 0; i < users.length; i++) {
    if(users[i].id === id) {
      if(users[i].username === username && users[i].password === pass) {
        return res.status(200).json({
          firstName: users[i].firstName,
          lastName: users[i].lastName,
          secret: users[i].secret
        });
      }
    }
  }
  res.status(401).json({msg: "Dont try to be naughty ;)"});
})

app.listen(3000, () => {
  console.log("App is listening at PORT 3000");
});

 
// module.exports = app;
