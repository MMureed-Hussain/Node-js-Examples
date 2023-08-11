const http = require("node:http");
const fs = require('node:fs');

 const server = http.createServer((req, res) => {
    const html = fs.readFileSync('index.html');
    fs.createReadStream("index.html").pipe(res);
   
//   res.writeHead(200 , {"Content-Type" : "text/html"});
//   res.end(html)
});

server.listen(3000 , ()=>{
    console.log("Server running on port 3000");
});