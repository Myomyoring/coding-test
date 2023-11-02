const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let answer = '';

for (let i = 0; i < input - 1; i++) {
	answer += ' '.repeat(input - 1 - i);
	answer += '*'.repeat(i * 2 + 1);
	console.log(answer);
	answer = '';
}
for (let i = input; i > 0; i--) {
	answer += ' '.repeat(input - i);
	answer += '*'.repeat(2 * i - 1);
	console.log(answer);
	answer = '';
}
