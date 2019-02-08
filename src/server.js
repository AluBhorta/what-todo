const http = require("http");
const fs = require("fs");

const state = fs.readFileSync("state.txt", "utf8");

const server = http.createServer((req, res) => {
  console.log(`Request was made to: ${req.url}`);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(state);
  res.end();
});
server.listen(4000);

console.log("Ayy dowgs, listening on port 4000");

// fs.writeFileSync("state.txt", JSON.stringify(data), "utf8", () =>
//   console.log("written")
// );

// const out = fs.readFileSync("state.txt", "utf8");

// console.log(out);
