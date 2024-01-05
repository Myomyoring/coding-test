const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
const result = [];
for (let str of input) {
	const stack = [];
	let check = true;
	for (let el of str) {
		if (el === '(' || el === '[') {
			stack.push(el);
		} else if (el === ')') {
			if (stack[stack.length - 1] === '(') {
				stack.pop();
			} else {
				check = false;
				break;
			}
		} else if (el === ']') {
			if (stack[stack.length - 1] === '[') {
				stack.pop();
			} else {
				check = false;
				break;
			}
		} else if (el === '.') break;
	}
	result.push(stack.length === 0 && check ? 'yes' : 'no');
}

console.log(result.join('\n'));
