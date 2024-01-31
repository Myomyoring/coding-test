const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

function factorial(num) {
	if (num < 0) return 0;
	if (num === 1 || num === 0) return 1;
	let result = BigInt(num);
	for (let i = BigInt(num - 1); i >= 1; i--) {
		result = BigInt(result * i);
	}
	return result;
}

const arr = factorial(n).toString().split('').reverse();
let result = 0;
for (let num of arr) {
	if (num === '0') {
		result++;
	} else break;
}
console.log(result);
