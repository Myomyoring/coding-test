const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const queue = [];
const result = [];
for (let str of input) {
	const [command, int] = str.split(' ');
	switch (command) {
		case 'push':
			queue.push(int);
			break;
		case 'pop':
			result.push(queue.length !== 0 ? queue.shift() : -1);
			break;
		case 'size':
			result.push(queue.length);
			break;
		case 'empty':
			result.push(queue.length === 0 ? 1 : 0);
			break;
		case 'front':
			result.push(queue.length !== 0 ? queue[0] : -1);
			break;
		case 'back':
			result.push(queue.length !== 0 ? queue[queue.length - 1] : -1);
			break;
		default:
			break;
	}
}

console.log(result.join('\n'));
