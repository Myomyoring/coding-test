const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.pop();

function prime(num) {
	if (num < 2) return false;
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}

function counter(num) {
	let cnt = 0;
	for (let i = num + 1; i <= num * 2; i++) {
		if (prime(i)) cnt++;
	}
	return cnt;
}

const result = [];
for (let i of input) {
	result.push(counter(i));
}
console.log(result.join('\n'));
