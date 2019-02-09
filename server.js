const fs = require("fs");
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  const state = fs.readFileSync("state.json", "utf8");
  res.type("application/json");

  res.send(state);
  res.end();
});

app.listen(port, () => console.log("Ayy dowgs, listening on port: " + port));

// const server = http.createServer((req, res) => {
//   console.log(`Request was made to: ${req.url}`);
//   res.writeHead(200, { "Content-Type": "application/json" });

//   const state = fs.readFileSync("state.json", "utf8");
//   res.end(state);
// });
// server.listen(port, () => console.log("Ayy dowgs, listening on port " + port));

// fs.writeFileSync("state.txt", JSON.stringify(data), "utf8", () =>
//   console.log("written")
// );

// const out = fs.readFileSync("state.txt", "utf8");

// console.log(out);
