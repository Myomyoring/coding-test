const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.sort((a, b) => a - b);
let sum = 0;
input.forEach((num) => (sum += num));
console.log(sum / 5);
console.log(input[2]);
