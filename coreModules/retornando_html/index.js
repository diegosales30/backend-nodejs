const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-Type", "text/html");
  res.end("<h1>Server com html</h1>");
});

server.listen(port, () => {
  console.log(`escutando porta: ${port}`);
});
