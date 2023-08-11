// const data = require("./data.json");
// console.warn(data.name);
// console.warn('data name name');

const http = require("node:http");

 const server = http.createServer((req, res) => {
  res.writeHead(200 , {"Content-Type" : "text/plain"});
  res.end("AoA Dummy User")
});

server.listen(3000 , ()=>{
    console.log("Server running on port 3000");
});