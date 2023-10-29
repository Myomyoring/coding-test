const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const str = input[1].split('');
let answer = 0;

for (let i in str) {
  answer += Number(str[i]);
}

console.log(answer);
