const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a1, a0] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n = Number(input[2]);
const fn = a1 * n + a0;
let result = 0;

fn <= c * n && a1 <= c ? (result = 1) : (result = 0);
console.log(result);
