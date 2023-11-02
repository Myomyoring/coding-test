const input = require('fs').readFileSync('/dev/stdin').toString().trim();

let i = 0;
let j = input.length - 1;
let answer = 1;
while (i < j) {
	if (input[i] !== input[j]) {
		answer = 0;
	}
	i++;
	j--;
}

console.log(answer);
