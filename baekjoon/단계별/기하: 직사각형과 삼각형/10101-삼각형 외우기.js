const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let result = '';
let sum = 0;
const same = input.every((num) => num === 60);

if (same) {
	result = 'Equilateral';
} else {
	input.forEach((num) => (sum += num));
	if (sum === 180) {
		let dup = new Set(input);
		dup.size === 2 ? (result = 'Isosceles') : (result = 'Scalene');
	} else {
		result = 'Error';
	}
}

console.log(result);
