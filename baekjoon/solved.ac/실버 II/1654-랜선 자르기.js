const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [k, n] = input.shift().split(' ').map(Number);
const lines = input.map(Number).sort((a, b) => a - b);

let left = 0;
let right = lines[lines.length - 1];
let result = Number.MIN_SAFE_INTEGER;
while (left <= right) {
	let mid = Math.floor((left + right) / 2);
	let lineNum = lines.reduce((acc, curr) => acc + Math.floor(curr / mid), 0);

	if (lineNum >= n) {
		if (mid > result) result = mid;
		left = mid + 1;
	} else {
		right = mid - 1;
	}
}

console.log(result);
