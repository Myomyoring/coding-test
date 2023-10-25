const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
let tmp = [];

for (let i = 0; i < input.length; i++) {
  tmp.push(input[i] % 42);
}

let answer = new Set(tmp);
console.log(answer.size);
