const [n, k] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function factorial(num) {
	let n = 1;
	for (let i = num; i >= 1; i--) {
		n *= i;
	}
	return n;
}

console.log(n === k ? 1 : factorial(n) / (factorial(n - k) * factorial(k)));
