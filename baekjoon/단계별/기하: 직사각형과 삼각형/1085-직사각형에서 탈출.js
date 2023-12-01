const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const [x, y, w, h] = input;
const arr = [x, y, w - x, h - y];

console.log(Math.min(...arr));
