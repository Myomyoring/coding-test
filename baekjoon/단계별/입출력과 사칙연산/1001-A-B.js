const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const a = input[0];
const b = input[1];
console.log(a - b);
