const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let result = '';
let notPerfect = 'is NOT perfect.';

for (const num of input) {
	if (num < 0) {
		break;
	}
	let divArr = [];
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			divArr.push(i);
		}
	}
	divArr.forEach((num) => (sum += num));
	if (num === sum) {
		result += `${num} = ${divArr.join(` + `)}\n`;
	} else {
		result += `${num} ${notPerfect}\n`;
	}
}

console.log(result);
