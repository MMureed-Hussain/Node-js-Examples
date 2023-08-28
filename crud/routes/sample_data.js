var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  res.send("List of All Sample data");
});

router.get("/add", function (req, res) {
  res.send("Add Sample data Insert");
});

module.exports = router;
