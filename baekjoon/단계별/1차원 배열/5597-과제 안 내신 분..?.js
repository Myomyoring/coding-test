const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const range = [];
for (let i = 1; i <= 30; i++) {
  range.push(i);
}
const answer = range.filter((num) => !input.includes(num));

console.log(`${Math.min(...answer)} ${Math.max(...answer)}`);
