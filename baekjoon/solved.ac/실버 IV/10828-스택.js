const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const stack = [];
const result = [];
for (let str of input) {
	const [command, int] = str.split(' ');

	switch (command) {
		case 'push':
			stack.push(int);
			break;
		case 'pop':
			result.push(stack.length !== 0 ? stack.pop() : -1);
			break;
		case 'size':
			result.push(stack.length);
			break;
		case 'empty':
			result.push(stack.length === 0 ? 1 : 0);
			break;
		case 'top':
			result.push(stack.length !== 0 ? stack[stack.length - 1] : -1);
			break;
		default:
			break;
	}
}

console.log(result.join('\n'));
