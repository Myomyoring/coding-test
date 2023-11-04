const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = Number(input[0]);
for (let i = 1; i <= input[0]; i++) {
	let word = input[i];
	for (let j = 0; j < word.length; j++) {
		if (word[j] !== word[j + 1] && word.slice(j + 1).includes(word[j])) {
			answer--;
			break;
		}
	}
}
console.log(answer);
