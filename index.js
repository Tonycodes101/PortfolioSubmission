var express = require('express');
var fs = require('fs');  // Importing fs module to read JSON file
var app = express();

// Middleware to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for localhost:5002 (home page)
app.get('/', function (req, res) {
  res.send("Hello, this is my first Express application!");
});

// Route for localhost:5002/about
app.get('/about', function (req, res) {
  res.send("This is a basic express application.");
});

// Route for localhost:5002/users/:userId/books/:bookId
app.get('/users/:userId/books/:bookId', function (req, res) {
  // Access the dynamic parameters via req.params
  res.send(req.params);
});

// Route for localhost:5002/GetStudents
app.get('/GetStudents', function (req, res) {
  fs.readFile(__dirname + "/" + "Student.json", 'utf8', function (err, data) {
    if (err) {
      return res.status(500).json({
        status: false,
        message: "Error reading student data",
      });
    }
    
    res.json({
      status: true,
      Status_Code: 200,
      "requested at": new Date().toLocaleString(),  // Local time
      requrl: req.url,
      requestMethod: req.method,
      studentdata: JSON.parse(data),
    });
  });
});

// Route for localhost:5002/GetStudentid/:id
app.get('/GetStudentid/:id', (req, res) => {
  fs.readFile(__dirname + "/" + "Student.json", 'utf8', function (err, data) {
    if (err) {
      return res.status(500).json({
        status: false,
        message: "Error reading student data",
      });
    }
    
    var students = JSON.parse(data);
    var student = students["Student" + req.params.id];

    if (student) {
      res.json({
        status: true,
        Status_Code: 200,
        "requested at": new Date().toLocaleString(),
        requrl: req.url,
        requestMethod: req.method,
        studentdata: student,
      });
    } else {
      res.status(404).json({
        status: false,
        Status_Code: 404,
        message: "Student not found",
        requested_at: new Date().toLocaleString(),
        requrl: req.url,
        requestMethod: req.method,
      });
    }
  });
});

// Route to serve studentInfo.html
app.get("/studentinfo", function (req, res) {
  res.sendFile("studentInfo.html", { root: __dirname });
});

// POST route to handle form submission
app.post("/submit-data", function (req, res) {
  // Get the form data from the request body
  var name = req.body.firstName + " " + req.body.lastName + " ";
  var age = req.body.myAge + " " + req.body.gender + " ";
  var qualification = "Qualification: " + req.body.Qual;

  // Log the qualification to the console for debugging
  console.log(req.body.Qual);

  // Send a JSON response containing the submitted data
  res.send({
    status: true,
    message: "Form Details",
    data: {
      name: name,
      age: age,
      qualification: qualification,
    }
  });
});

// Start the server on port 5002
app.listen(5002, function () {
  console.log("Server is running on port 5002");
});
