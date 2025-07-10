const express = require('express');
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const jwtPassword = "123";

function userExists(entity ,username, password) { // this function will be for the JWT
  let userExists = false;
  for(let i = 0; i < entity.length; i++) {
    if(entity[i].username === username && entity[i].password === password) {
      userExists = true;
    }
  }
  return userExists;
}

let ADMINS = [];
let USERS = [];
let COURSES = [];
let courseId = 0;

// Admin routes
app.post('/admin/signup', (req, res) => {
  const username = req.body.username; // body params
  const password = req.body.password;
  for(let i = 0; i < ADMINS.length; i++) {
    if(ADMINS[i].username === username) { // checking if admins exist
      return res.status(406).json({ // 406 is "Not acceptable"
        msg: "Sorry admin username already exists"
      })
    }
  }
  const admin = ({ // creating admin object
    username: username,
    password: password
  });

  ADMINS.push(admin); // pushing the admin to array
  res.status(201).json({// res
    username: username,
    msg: "Admin has been formed successfully."
  });
  
});

app.post('/admin/login', (req, res) => {
  // logic to log in admin
  const username = req.headers.username;
  const password = req.headers.password;

  if(!userExists(ADMINS, username, password)) {
    return res.status(401).json({
      msg: "Username or password is wrong"
    });
  }

  var token = jwt.sign({username: username}, jwtPassword);
  return res.status(202).json({
    msg: "Login successfull",
    tokenVal: token
  });
});

app.post('/admin/courses', (req, res) => { // G fat gayi bc
  // logic to create a course
  const username = req.headers.username; // well, I think headers are used for auth and body is used for addition
  const password = req.headers.password;
  const token = req.headers.jwt;

  const course = req.body.course;
  const description = req.body.description;
  const price = req.body.price;
  const published = true;
  try {
    let decoded = jwt.verify(token, jwtPassword);
    if(decoded) { // if this token is valid
      if(!userExists(ADMINS, username, password)) {
        return res.status(401).json({
          msg: "Username or password is wrong!"
        })
      }

      const new_course = {
        id: courseId,
        course: course,
        description: description,
        price: price,
        published: published
      }

      for(let i = 0; i < COURSES.length; i++) {
        if (COURSES[i].course === course) {
        return res.status(405).json({ // 
          course: course,
          msg: "Course already present"
        });
      }
      
      }
      COURSES.push(new_course);
      courseId++;
      return res.status(201).json({ // 202 - Item is accepted      
        id: courseId,
        course: course,
        price: price,
        msg: "Course has been published successfully"
      });
    }
  } catch(e) {
    return res.status(405).json({
      msg:"Invalid JWT Token"
    });
  }

});

function getCourse(id) {
  id = Number(id);
  for(let i = 0; i < COURSES.length; i++) {
    if(COURSES[i].id === id) {
      return COURSES[i].course;
    }
  }
}

app.put('/admin/courses/:courseId', (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const updCourse = req.body.updCourse;

  const id = Number(req.params.courseId);
  console.log("COURSES:", COURSES);
  for(let i = 0; i < COURSES.length; i++) {
    if(COURSES[i].id === id) {
      COURSES[i].course = updCourse;
      return res.status(201).json({
      course: COURSES[i].course,
      id: id,
      msg: "Course has been updated successfully."
      });
    }
  }
  return res.status(404).json({
    course: updCourse,
    msg: "Course not found"
  });
});

app.get('/admin/courses', (req, res) => {
  // const courses = COURSES.map(course => course.course);
  // res.status(200).json({
  //   courses 
  // })
  res.status(200).json({
    courses: COURSES
  });
});

// User routes
app.post('/users/signup', (req, res) => {
  // logic to sign up user
});

app.post('/users/login', (req, res) => {
  // logic to log in user
});

app.get('/users/courses', (req, res) => {
  // logic to list all courses
});

app.post('/users/courses/:courseId', (req, res) => {
  // logic to purchase a course
});

app.get('/users/purchasedCourses', (req, res) => {
  // logic to view purchased courses
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
