const path = require('node:path');
console.log(path.resolve("Folder","Folder2" , "index.html"))
console.log(path.resolve("/Folder","Folder2" , "index.html"))
console.log(path.resolve("/Folder","//Folder2" , "index.html"))
console.log(path.resolve("/Folder","//Folder2" , "../index.html"))
console.log(path.resolve(__dirname , "data.json"))