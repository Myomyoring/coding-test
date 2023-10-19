const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
let sum = 0;

for (let i = 1; i <= parseInt(input); i++) {
  sum += i;
}

console.log(sum);
