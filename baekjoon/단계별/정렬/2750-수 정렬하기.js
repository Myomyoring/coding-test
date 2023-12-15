const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
input.sort((a, b) => a - b);
input.forEach((num) => console.log(num));
