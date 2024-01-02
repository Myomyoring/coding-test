const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const stack = [];
const result = [];
for (let el of input) {
	let [command, int] = el.split(' ').map(Number);

	switch (command) {
		case 1:
			stack.push(int);
			break;
		case 2:
			result.push(stack.length === 0 ? -1 : stack.pop());
			break;
		case 3:
			result.push(stack.length);
			break;
		case 4:
			result.push(stack.length === 0 ? 1 : 0);
			break;
		case 5:
			result.push(stack.length === 0 ? -1 : stack[stack.length - 1]);
			break;
		default:
			break;
	}
}

console.log(result.join('\n'));
