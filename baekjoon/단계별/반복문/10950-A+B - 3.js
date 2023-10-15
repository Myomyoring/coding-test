const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = input[0];

for (let i = 1; i <= T; i++) {
  let cases = input[i].split(" ").map(Number);
  console.log(cases[0] + cases[1]);
}
