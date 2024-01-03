const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

const k = input.shift();
const result = [];

for (let i = 0; i < k; i++) {
	input[i] === 0 ? result.pop() : result.push(input[i]);
}

console.log(result.reduce((acc, curr) => acc + curr, 0));
