const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const numArr = input[1].split(' ').map(Number);
let cnt = 0;
numArr.forEach((num) => {
	let div = 0;
	for (let i = 1; i <= num; i++) {
		if (num % i === 0) {
			div++;
		}
	}
	if (div === 2) cnt++;
});

console.log(cnt);
