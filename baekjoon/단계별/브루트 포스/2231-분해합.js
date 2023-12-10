const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const n = Number(input);

let arr = [];

for (let i = 1; i <= n; i++) {
	let str = String(i);
	let sum = 0;
	for (let j = 0; j < str.length; j++) {
		sum += Number(str[j]);
	}
	if (sum + Number(str) === n) {
		arr.push(Number(str));
	}
}

console.log(arr.length === 0 ? 0 : Math.min(...arr));
