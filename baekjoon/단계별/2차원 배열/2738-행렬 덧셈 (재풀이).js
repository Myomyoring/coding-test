const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));
const [n, m] = input.shift();
const A = input.slice(0, n);
const B = input.slice(n, n + n);
const result = [];
for (let i = 0; i < n; i++) {
	let tmp = '';
	for (let j = 0; j < m; j++) {
		tmp += `${A[i][j] + B[i][j]} `;
	}
	result.push(tmp.trimEnd());
}

console.log(result.join('\n'));
