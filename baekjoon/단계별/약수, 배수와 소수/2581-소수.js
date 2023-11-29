const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let arr = [];
let sum = 0;

for (let num = input[0]; num <= input[1]; num++) {
	let div = 0;
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			div++;
		}
	}
	if (div === 2) {
		arr.push(num);
	}
}

arr.forEach((num) => (sum += num));
console.log(sum === 0 ? -1 : `${sum}\n${Math.min(...arr)}`);
