const express = require("express");
const server = express();

const port = 3000;

server.use("/hello", (req, res) => {
  res.send("Hello World");
});

server.listen(port, () => {
  console.log(`Server is listening on Port ${port}...`);
});
