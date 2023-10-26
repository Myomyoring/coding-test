const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const n = input[0];
const scoreList = input[1].split(' ').map(Number);
const max = Math.max(...scoreList);
let answer = 0;
for (let i = 0; i < n; i++) {
  answer += (scoreList[i] / max) * 100;
}
console.log((answer / n).toFixed(2));
