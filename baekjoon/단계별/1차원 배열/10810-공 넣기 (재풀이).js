const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const result = Array(n).fill(0);
input.forEach((sol) => {
	const [i, j, k] = sol.split(' ').map(Number);
	result.fill(k, i - 1, j);
});
console.log(result.join(' '));
