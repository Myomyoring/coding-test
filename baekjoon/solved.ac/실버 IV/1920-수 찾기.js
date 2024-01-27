const [n, A, m, nums] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = '';
const set = new Set(A.split(' '));

for (let num of nums.split(' ')) {
	result += `${set.has(num) ? 1 : 0}\n`;
}
console.log(result);
