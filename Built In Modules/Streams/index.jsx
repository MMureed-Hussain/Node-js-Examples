const fs = require("node:fs");

const readableStream = fs.createReadStream("greetA.txt",{
    encoding: "utf8",
    highWaterMark:5,
});

const writableStream = fs.createWriteStream("greetB.txt");

readableStream.on("data" , (chunk)=>{
    console.log(chunk);
    writableStream.write(chunk);
})