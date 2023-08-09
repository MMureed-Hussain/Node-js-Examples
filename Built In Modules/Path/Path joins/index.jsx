const path = require('node:path');
console.log(path.join("Folder","Folder2" , "index.html"))
console.log(path.join("/Folder","Folder2" , "index.html"))
console.log(path.join("/Folder","//Folder2" , "index.html"))
console.log(path.join("/Folder","//Folder2" , "../index.html"))
console.log(path.join(__dirname , "data.json"))