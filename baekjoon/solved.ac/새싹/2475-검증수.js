const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = 0;
for (let num of input) {
	result += num * num;
}
console.log(result % 10);
