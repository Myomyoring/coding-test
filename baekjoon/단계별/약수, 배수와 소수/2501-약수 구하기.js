const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = [];

for (let i = 1; i <= input[0]; i++) {
	if (input[0] % i === 0) {
		result.push([i]);
	}
}

if (input[1] <= result.length) {
	console.log(Number(result[input[1] - 1]));
} else {
	console.log(0);
}
