// var express = require("express");
// var router = express.Router();
// // var database = require('../database');
// var database = require('../routes/database')

// router.get("/", function (req, res) {
//   res.send("List of All Sample data");
// });

// router.get("/add", function (req, res) {
//   res.send("Add Sample data Insert");
// });

// module.exports = router;

var express = require("express");

var router = express.Router();

var database = require("../routes/database");

router.get("/", function (request, response) {
  var query = "SELECT * FROM sample_data ORDER BY id DESC";

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.render("sample_data", {
        title: "Node.js MySQL CRUD Application",
        action: "list",
        sampleData: data,
      });
    }
  });
});

router.get("/add", function (request, response) {
  response.render("sample_data", {
    title: "Insert Data into MySQL",
    action: "add",
  });
});

router.post("/add_sample_data", function (request, response) {
  var id = request.body.id;
  var FirstName = request.body.FirstName;
  var LastName = request.body.LastName;
  var Age = request.body.Age;

  var query = `insert into sample_data(id,FirstName,LastName,Age) values("${id}","${FirstName}","${LastName}","${Age}")`;

  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
      response.redirect("/sample_data");
    }
  });
});

router.get("/edit/:id", function (request, response) {
  var id = request.params.id;

  var query = `SELECT * FROM sample_data WHERE id = "${id}"`;

  database.query(query, function (error, data) {
    response.render("sample_data", {
      title: "Edit MySql Table Data",
      action: "edit",
      sampleData: data[0],
    });
  });
});

router.post("/edit/:id", function (request, response) {
  var id = request.params.id;
  var FirstName = request.body.FirstName;
  var LastName = request.body.LastName;
  var Age = request.body.Age;

  var query = `update sample_data SET
    FirstName ="${FirstName}"
    ,LastName ="${LastName}"
    ,Age ="${Age}" 
    where id ="${id}"
    `;
  database.query(query, function (error, data) {
    if (error) {
      throw error;
    } else {
        response.redirect("/sample_data")
    }
  });
});

module.exports = router;
