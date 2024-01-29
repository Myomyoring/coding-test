const input = require('fs')
	.readFileSync('/dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((el) => el.split(' ').map(Number));

const max = Math.max(...input.flat());
const result = [max];
for (let i = 0; i < input.length; i++) {
	const idx = input[i].indexOf(max);
	if (idx !== -1) {
		result.push(`${i + 1} ${idx + 1}`);
	}
}
console.log(result.join('\n'));
