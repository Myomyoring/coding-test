const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
let result = '';
input.forEach((str) => (result += str === str.split('').reverse().join('') ? 'yes\n' : 'no\n'));
console.log(result);
