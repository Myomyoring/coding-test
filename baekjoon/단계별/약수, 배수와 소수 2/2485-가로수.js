const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const result = [];
for (let i = 0; i < input.length - 1; i++) {
	result.push(Math.abs(input[i] - input[i + 1]));
}

function gcd(a, b) {
	if (a < b) {
		[a, b] = [b, a];
	}

	if (b === 0) {
		return a;
	} else {
		return gcd(b, a % b);
	}
}

function findGCD(arr) {
	let tmp = arr[0];
	for (let i = 1; i < arr.length; i++) {
		tmp = gcd(tmp, arr[i]);
	}
	return tmp;
}

let num = findGCD(result);
let sum = 0;
for (let x of result) {
	sum += Math.floor(x / num) - 1;
}
console.log(sum);
