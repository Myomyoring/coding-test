const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((num) => num.split(' ').map(Number));
const [n, m] = input.shift();
let arr = new Array(n).fill().map(() => new Array(m).fill(0));
let answer = '';

for (let i = 0; i < n; i++) {
	for (let j = 0; j < m; j++) {
		arr[i][j] = input[i][j] + input[i + n][j];
	}
}
for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[0].length; j++) {
		answer += `${arr[i][j]} `;
	}
	answer += '\n';
}
console.log(answer.trim());
