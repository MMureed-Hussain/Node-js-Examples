const fs = require("node:fs")

console.log("first")

fs.readFile("data.txt", "utf-8" , (err , data)=>{
    console.log("File Data")
})

console.log("End");