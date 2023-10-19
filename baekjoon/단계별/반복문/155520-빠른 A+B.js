// 1620 ms
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = input[0];
let answer = "";

for (let i = 1; i <= n; i++) {
  let test = input[i].split(" ").map(Number);
  answer += test[0] + test[1] + "\n";
}

console.log(answer);

// 1396 ms
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let test = input[i].split(" ").map(Number);
  answer += test[0] + test[1] + "\n";
}

console.log(answer);
