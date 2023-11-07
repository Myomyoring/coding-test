const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const num = input[0];
console.log(num.toString(input[1]).toUpperCase());
