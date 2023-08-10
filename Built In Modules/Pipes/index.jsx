const fs = require("node:fs");
const zlib = require("node:zlib");

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("greetA.txt",{
    encoding: "utf8",
    highWaterMark:5,
});

readableStream.pipe(gzip).pipe(fs.WriteStream("greetB.txt.gz"));

const writableStream = fs.createWriteStream("greetB.txt");

readableStream.pipe(writableStream);