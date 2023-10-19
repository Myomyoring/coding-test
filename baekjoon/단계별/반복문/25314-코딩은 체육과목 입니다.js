const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = input / 4;

console.log("long ".repeat(n) + "int");
