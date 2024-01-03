const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(input.shift());

const result = [];
for (let str of input) {
	let cnt = 0;
	for (let el of str) {
		el === '(' ? cnt++ : cnt--;

		if (cnt < 0) break;
	}
	result.push(cnt === 0 ? 'YES' : 'NO');
}

console.log(result.join('\n'));
