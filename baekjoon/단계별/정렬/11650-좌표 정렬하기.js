const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));
input.shift();
input.sort((a, b) => {
	if (a[0] === b[0]) {
		return a[1] - b[1];
	} else {
		return a[0] - b[0];
	}
});
let result = '';
input.forEach((el) => {
	result += `${el.join(' ')}\n`;
});

console.log(result);
