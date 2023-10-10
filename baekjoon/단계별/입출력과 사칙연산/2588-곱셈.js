const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const a = parseInt(input[0]);
const b = input[1];

console.log(
  a * parseInt(b[2]) +
    "\n" +
    a * parseInt(b[1]) +
    "\n" +
    a * parseInt(b[0]) +
    "\n" +
    a * parseInt(b)
);
