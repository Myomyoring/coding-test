const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [A, B, C] = input;
let price = 0;

if (A === B && A === C) {
  price = 10000 + A * 1000;
} else if (A === B || A === C) {
  price = 1000 + A * 100;
} else if (B === C) {
  price = 1000 + B * 100;
} else {
  let max = Math.max(A, B, C);
  price = max * 100;
}

console.log(price);
