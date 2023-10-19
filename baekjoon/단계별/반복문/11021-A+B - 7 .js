const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let answer = "";

for (let i = 1; i <= input[0]; i++) {
  let test = input[i].split(" ").map(Number);
  answer += `Case #${i}: ${test[0] + test[1]}\n`;
}

console.log(answer);
