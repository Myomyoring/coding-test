const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
input.sort((a, b) => a - b);

const [a, b, c] = input;
let result = 0;

if (a + b > c) {
	result = a + b + c;
} else {
	result = a + b + (a + b - 1);
}

console.log(result);
