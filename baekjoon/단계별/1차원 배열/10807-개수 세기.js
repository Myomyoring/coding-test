const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const v = input[2];

const answer = input[1].split(" ").filter((number) => number === v);

console.log(answer.length);
