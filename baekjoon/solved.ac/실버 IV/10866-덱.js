const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();
const dequeue = [];
const result = [];
for (let str of input) {
	const [command, int] = str.split(' ');
	switch (command) {
		case 'push_front':
			dequeue.unshift(int);
			break;
		case 'push_back':
			dequeue.push(int);
			break;
		case 'pop_front':
			result.push(dequeue.length !== 0 ? dequeue.shift() : -1);
			break;
		case 'pop_back':
			result.push(dequeue.length !== 0 ? dequeue.pop() : -1);
			break;
		case 'size':
			result.push(dequeue.length);
			break;
		case 'empty':
			result.push(dequeue.length !== 0 ? 0 : 1);
			break;
		case 'front':
			result.push(dequeue.length !== 0 ? dequeue[0] : -1);
			break;
		case 'back':
			result.push(dequeue.length !== 0 ? dequeue[dequeue.length - 1] : -1);
			break;
		default:
			break;
	}
}

console.log(result.join('\n'));
