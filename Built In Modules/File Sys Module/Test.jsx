const fs = require("node:fs");
// var path = require("path");
// var filePath = path.join(__dirname, "input.txt");
// fs.readFile(filePath, function (err, data) {
console.log("first")
const fileContent = fs.readFileSync("input.txt" , "utf-8")
console.log(fileContent);
console.log("Sceond")
fs.readFile('input.txt', function (err, data) {
  if (err) {
    console.warn("Error reading input file:", err);
  } else {
    console.warn("Reading File data:", data.toString());
  }
});
console.log("third")
fs.writeFileSync("greet.txt" , "AoA Ali!");
fs.writeFile("greet.txt" , " Tell me about something your self!" ,{flag:"a"}, (err)=>{
  if(err){
    console.log(err)
  }
  else{
    console.log("File written successfully")
  }
})
