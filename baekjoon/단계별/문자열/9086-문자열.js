const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const n = input[0];
let answer = '';
for (let i = 1; i <= n; i++) {
  answer += `${input[i].charAt(0)}${input[i].charAt(input[i].length - 1)}\n`;
}
console.log(answer);
