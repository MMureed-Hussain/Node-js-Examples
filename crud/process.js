const express = require("express");

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "test",
});

var database_connection_status = "";

connection.connect(function (err) {
  if (err) {
    database_connection_status = 
      '<h3 class="text-center text-danger">My-Sql Database Connection Error</h3>'
  } else {
    database_connection_status = 
      '<h3 class="text-center text-success">My-Sql Database Connect SuccessFFully</h3>'
  }
});

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res, next) {
  res.send(`
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
      <style>
        .centered-form {
          display: flex;
          flex-direction: column;
          align-items: center;
        //   width:50%;
        }
        
        .transparent-label {
          background-color: rgba(0, 0, 0, 0.2);
          padding: 5px;
          border-radius: 5px;
        }
      </style>
      <div class="container">
        <h1 class="text-center">Submit Form</h1>
        `+database_connection_status+`
        <form class="centered-form" method = "POST" action = "/">
          <div class="mb-3">
            <label class="" for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Enter your first name">
          </div>
          <div class="mb-3">
            <label class="" for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter your last name">
          </div>
          <div class="mb-3">
            <label class="" for="email">Email address</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
          </div>
          <input type="submit" class="btn btn-primary" value="Add" />
        </form>
      </div>
    `);
});

app.post("/", function (req, res, next) {
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
