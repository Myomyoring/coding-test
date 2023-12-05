const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = '';

for (let el of input) {
	let triangle = el.split(' ').map(Number);
	let stop = triangle.every((num) => num === 0);
	triangle.sort((a, b) => b - a);

	if (stop) {
		break;
	} else if (triangle[0] >= triangle[1] + triangle[2]) {
		result += 'Invalid\n';
	} else {
		let obj = new Set(triangle);
		obj.size === 1 ? (result += 'Equilateral\n') : obj.size === 2 ? (result += 'Isosceles\n') : (result += 'Scalene\n');
	}
}

console.log(result);
