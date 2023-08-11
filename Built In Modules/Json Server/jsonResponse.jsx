const http = require("node:http");
const { json } = require("stream/consumers");

 const server = http.createServer((req, res) => {
    const fullName = {
       firstName: "Mureed",
        lastName: "hussain"
        // lastName: req.body.lastName
    }
  res.writeHead(200 , {"Content-Type" : "Application/Json"});
//   res.end("AoA Dummy User")
  res.end(JSON.stringify(fullName))
});

server.listen(3000 , ()=>{
    console.log("Server running on port 3000");
});