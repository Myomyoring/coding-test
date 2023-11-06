const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));
const num = Number(input.shift());
const paper = new Array(100).fill().map((el) => new Array(100).fill(false));
for (let i = 0; i < num; i++) {
	let x = input[i][0];
	let y = input[i][1];

	for (let j = 0; j < 10; j++) {
		for (let k = 0; k < 10; k++) {
			paper[x + j][y + k] = true;
		}
	}
}
let answer = paper.reduce((acc, curr) => {
	for (let le of curr) {
		if (le) {
			acc++;
		}
	}
	return acc;
}, 0);

console.log(answer);
