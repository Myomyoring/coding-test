const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((num) => num.split(' ').map(Number));
let max = 0;
let location = '1 1';

for (let i = 0; i < 9; i++) {
	let getMax = Math.max(...input[i]);
	if (max <= getMax) {
		for (let j = 0; j < 9; j++) {
			if (getMax === input[i][j]) {
				max = getMax;
				location = `${i + 1} ${j + 1}`;
			}
		}
	}
}

console.log(`${max}`);
console.log(`${location}`);
