const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, k] = input.shift().split(' ').map(Number);
const scores = input.toString().split(' ').map(Number);

scores.sort((a, b) => b - a);
console.log(scores[k - 1]);
