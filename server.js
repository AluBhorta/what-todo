// DEPENDENCIES
const fs = require("fs");
const express = require("express");
const cors = require("cors");

// CONFIG
const app = express();
const port = process.env.PORT || 4000;

// use of CORS
app.use(cors());

// json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/data", (req, res, next) => {
  // res.header("Content-Type", "application/json");
  res.type("json");
  fs.readFile("state.json", "utf8", (err, data) => {
    if (err) {
      res
        .status(500)
        .send({ success: false, message: "Internal Server Error!" });
      next(err);
    } else if (!data) {
      console.log("No Data Found.");
      res.status(204).send({ success: true, message: "No Data Found." });
    } else {
      res.status(200).send({
        success: true,
        message: "Successfully retrieved data",
        payload: JSON.parse(data)
      });
    }
  });
});

// make it into a post and update the specific list/list-item
app.put("/update", (req, res, next) => {
  console.log("handling a put req on port: " + port);
  const state = req.body.payload;

  fs.writeFile("state.json", state, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send("Unable to update state");
      next(err);
    } else {
      console.log("State successfully updated");
      res.send(state);
    }
  });
});

app.listen(port, () => console.log("Ayy dowgs, listening on port: " + port));
