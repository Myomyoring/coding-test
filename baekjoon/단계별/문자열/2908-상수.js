const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(Math.max(input[0].split('').reverse().join(''), input[1].split('').reverse().join('')));
