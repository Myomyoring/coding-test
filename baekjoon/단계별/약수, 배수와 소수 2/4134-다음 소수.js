const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.shift();
const result = [];

function prime(num) {
	if (num < 2) return false;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

for (let num of input) {
	while (!prime(num)) {
		num++;
	}
	result.push(num);
}

console.log(result.join('\n'));
