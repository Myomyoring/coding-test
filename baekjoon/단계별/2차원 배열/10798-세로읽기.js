const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(''));
let answer = '';

for (let i = 0; i < 15; i++) {
	for (let j = 0; j < 5; j++) {
		answer += input[j][i] ?? '';
	}
}
console.log(answer);
