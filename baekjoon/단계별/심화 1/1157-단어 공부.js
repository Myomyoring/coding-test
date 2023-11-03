const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase().split('');
let alpha = [];
for (let i = 65; i <= 90; i++) {
	alpha.push(String.fromCharCode(i));
}

let beta = {};
for (let i = 0; i < input.length; i++) {
	let result = alpha.includes(input[i]);
	if (result) {
		if (beta[input[i]] === undefined) {
			beta[input[i]] = 1;
		} else {
			beta[input[i]] = beta[input[i]] + 1;
		}
	}
}

let max = Math.max(...Object.values(beta));
let key = Object.keys(beta).filter((key) => beta[key] === max);

console.log(key.length >= 2 ? '?' : key.join(''));
