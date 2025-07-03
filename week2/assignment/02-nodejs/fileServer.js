/**
 * 
 * 
 * 
 * 4 TEST CASES PASSED OUT OF 5 -> 03-07-2025
 
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module

  The expected API endpoints are defined below,
  DONE 1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files

  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt

    - For any other route not defined in the server return 404

    Testing the server - run `npm run test-fileServer` command in terminal
 */
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  const dirPath = path.join(__dirname, "files");
  const files = fs.readdirSync(dirPath);

  let fileFound = false;
  for(let i = 0; i < files.length; i++) {
    if(filename == files[i]) {
      const fullPath = path.join(dirPath, files[i])
      const content = fs.readFileSync(fullPath, "utf-8");
      // res.status(200).json({
      //   msg: "File found",
      //   contents: content,
      // });
      res.status(200).send(content);
      fileFound = true;
      break;
    }
  }
  if(!fileFound) {
      // res.status(404).json({
      //   msg: "File Not Found",
      //   contents: null,
      // });
      res.status(404).send("File not found");
  }
});

app.get("/files", (req, res) => {
  const files = fs.readdirSync("./files");

  const dirPath = path.join(__dirname, "files");
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return res.status(500).send("Internal Server Error");
    }
  })

  if(files.length === 0) {
    return res.status(404).json({
      error: "No files found in directory"
    });
  }
  console.log(files);
  // res.status(200).json({
  //   "Files": files,
  // });
  res.status(200).json(files);
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

module.exports = app;
