const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(Math.ceil((input[2] - input[1]) / (input[0] - input[1])));
