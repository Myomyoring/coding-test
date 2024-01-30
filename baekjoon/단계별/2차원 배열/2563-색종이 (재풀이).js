const [n, ...papers] = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));

const p = Array(100)
	.fill()
	.map(() => Array(100).fill(false));

let result = 0;
for (let paper of papers) {
	const [col, row] = paper;
	for (let i = row; i < row + 10; i++) {
		for (let j = col; j < col + 10; j++) {
			p[i][j] = true;
		}
	}
}

for (let i = 0; i < 100; i++) {
	for (let j = 0; j < 100; j++) {
		if (p[i][j]) {
			result++;
		}
	}
}

console.log(result);
