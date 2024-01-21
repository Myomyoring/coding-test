const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const set = new Set(input);
let result = '';
for (let i = 1; i <= 30; i++) {
	if (!set.has(i)) result += `${i}\n`;
}
console.log(result);
