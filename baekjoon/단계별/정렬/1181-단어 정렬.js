function duplicateRemover(arr) {
	let dup = new Set(arr);
	return [...dup];
}
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let arr = duplicateRemover(input);
arr.sort();
let result = '';

for (let i = 1; i < 51; i++) {
	arr.forEach((str) => {
		if (str.length === i) {
			result += `${str}\n`;
		}
	});
}

console.log(result);
