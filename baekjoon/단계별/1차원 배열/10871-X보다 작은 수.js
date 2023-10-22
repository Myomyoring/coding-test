const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [n, x] = input[0].split(" ").map(Number);
let a = input[1]
  .split(" ")
  .map(Number)
  .filter((num) => num < x);

console.log(a.join(" "));
