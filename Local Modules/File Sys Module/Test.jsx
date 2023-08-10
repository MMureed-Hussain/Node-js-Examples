var fs = require("fs");
// var path = require("path");
// var filePath = path.join(__dirname, "input.txt");
// fs.readFile(filePath, function (err, data) {
fs.readFile('input.txt', function (err, data) {
  if (err) {
    console.warn("Error reading input file:", err);
  } else {
    console.warn("Reading File data:", data.toString());
  }
});
