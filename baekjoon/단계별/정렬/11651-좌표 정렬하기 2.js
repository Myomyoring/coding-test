const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));
input.shift();

input.sort((a, b) => {
	if (a[1] === b[1]) {
		return a[0] - b[0];
	} else {
		return a[1] - b[1];
	}
});
let result = '';
input.forEach((el) => {
	result += `${el.join(' ')}\n`;
});
console.log(result);
