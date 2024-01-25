const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
const result = [];
// 피타고라스 정리: a^2+b^2 = c^2
for (let str of input) {
	let triangle = str.split(' ').map(Number);
	triangle.sort((a, b) => a - b);
	result.push(Math.pow(triangle[0], 2) + Math.pow(triangle[1], 2) === Math.pow(triangle[2], 2) ? 'right' : 'wrong');
}
console.log(result.join('\n'));
