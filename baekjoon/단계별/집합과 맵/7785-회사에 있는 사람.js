const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input.shift());
const set = new Set();

input.forEach((el) => {
	let arr = el.split(' ');
	if (arr[1] === 'leave') {
		set.delete(arr[0]);
	} else if (arr[1] === 'enter') {
		set.add(arr[0]);
	}
});

const result = [...set].sort().reverse();
console.log(result.join('\n'));
