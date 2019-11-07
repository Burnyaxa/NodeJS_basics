const PORT = process.env.PORT || 3000;
const http = require('http')
const fs = require("fs");
const server = http.createServer((req, res) => {
 res.statusCode = 200
 res.setHeader("Content-Type", "text/html")
 fs.readFile("./task3.html", null, (error, data) => {
  if (error) {
    res.writeHead(404);
    res.write("File not found");
  } else {
    res.write(data);
  }
  res.end();
  });
})
server.listen(PORT, () => {
 console.log(`Server running`)
})