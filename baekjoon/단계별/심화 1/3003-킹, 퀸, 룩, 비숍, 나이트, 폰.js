const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let answer = '';
const white = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < 6; i++) {
	input[i] === white[i] ? (answer += `0 `) : (answer += `${white[i] - input[i]} `);
}

console.log(answer);
