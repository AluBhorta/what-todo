const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/data", (req, res) => {
  const state = fs.readFileSync("state.json", "utf8");

  res.send(state);
  res.end();
});

app.put("/update", (req, res) => {
  console.log("handling a put req on port: " + port);
  const state = req.body.payload;

  fs.writeFileSync("state.json", state, "utf8", () =>
    console.log("state successfully written to file")
  );

  res.send(state);
});

app.listen(port, () => console.log("Ayy dowgs, listening on port: " + port));

// fs.writeFileSync("state.txt", JSON.stringify(data), "utf8", () =>
//   console.log("written")
// );
