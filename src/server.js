const http = require("http");
const fs = require("fs");

class Cunt {
  constructor() {
    this.cuntName = "cn";
    this.voice = "ggwp";
    this.attr = ["holy", "fucking ", "crap"];
  }
  fuckOff(params) {
    return "fuckoff" + params;
  }
}

const data = {
  name: "fer",
  dob: "3-1-97",
  sayHi: value => {
    console.log(value);
  },
  friend: new Cunt()
};

// console.log(data.friend);

fs.writeFileSync("state.txt", JSON.stringify(data), "utf8", () =>
  console.log("written")
);

const out = fs.readFileSync("state.txt", "utf8");

console.log(out);
