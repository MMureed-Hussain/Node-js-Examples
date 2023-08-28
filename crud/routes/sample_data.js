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

var express = require('express');

var router = express.Router();

var database = require('../routes/database')

router.get("/", function(request, response){

	var query = "SELECT * FROM sample_data ORDER BY id DESC";

	database.query(query, function(error, data){

		if(error)
		{
			throw error; 
		}
		else
		{
			response.render('sample_data', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data});
		}

	});

});

module.exports = router;
