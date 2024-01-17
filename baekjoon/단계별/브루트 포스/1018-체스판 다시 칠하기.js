const [input, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.split(' ').map(Number);

const black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
const white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];

let result = 40;

for (let i = 0; i <= n - 8; i++) {
	for (let j = 0; j <= m - 8; j++) {
		fix(j, i);
	}
}

function fix(col, row) {
	let w = 0;
	let b = 0;

	for (let i = row; i < row + 8; i++) {
		for (let j = col; j < col + 8; j++) {
			if (board[i][j] !== white[i - row][j - col]) w++;
			if (board[i][j] !== black[i - row][j - col]) b++;
		}
	}

	let min = b < w ? b : w;
	if (min < result) result = min;
}

console.log(result);
