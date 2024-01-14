const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const result = [];

class Node {
	prev = null;
	next = null;
	constructor(value) {
		this.value = value;
	}
}

class SingleLikedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	add(type, value) {
		const newNode = new Node(value);
		if (!this.length) {
			if (!this.head) {
				this.head = newNode;
			}
			if (!this.tail) {
				this.tail = newNode;
			}
		} else {
			if (type === 'head') {
				this.head.prev = newNode;
				newNode.next = this.head;
				this.head = newNode;
			} else if (type === 'tail') {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			}
		}

		this.length++;
	}

	shift() {
		if (this.length === 0) return -1;
		const value = this.head.value;
		this.head = this.head.next;

		!this.head ? (this.tail = null) : (this.head.prev = null);

		this.length--;
		return value;
	}

	pop() {
		if (this.length === 0) return -1;
		const value = this.tail.value;
		this.tail = this.tail.prev;

		!this.tail ? (this.head = null) : (this.tail.next = null);

		this.length--;
		return value;
	}

	size() {
		return this.length;
	}

	empty() {
		return this.length !== 0 ? 0 : 1;
	}

	front() {
		return this.head ? this.head.value : -1;
	}

	back() {
		return this.tail ? this.tail.value : -1;
	}
}

const deque = new SingleLikedList();

input.forEach((el) => {
	const [command, int] = el.split(' ').map(Number);
	switch (command) {
		case 1:
			deque.add('head', int);
			break;
		case 2:
			deque.add('tail', int);
			break;
		case 3:
			result.push(deque.shift());
			break;
		case 4:
			result.push(deque.pop());
			break;
		case 5:
			result.push(deque.size());
			break;
		case 6:
			result.push(deque.empty());
			break;
		case 7:
			result.push(deque.front());
			break;
		case 8:
			result.push(deque.back());
			break;
		default:
			break;
	}
});

console.log(result.join('\n'));

// const deque = [];

// input.forEach((el) => {
// 	const [command, int] = el.split(' ').map(Number);
// 	switch (command) {
// 		case 1:
// 			deque.unshift(int);
// 			break;
// 		case 2:
// 			deque.push(int);
// 			break;
// 		case 3:
// 			result.push(deque.length !== 0 ? deque.shift() : -1);
// 			break;
// 		case 4:
// 			result.push(deque.length !== 0 ? deque.pop() : -1);
// 			break;
// 		case 5:
// 			result.push(deque.length);
// 			break;
// 		case 6:
// 			result.push(deque.length !== 0 ? 0 : 1);
// 			break;
// 		case 7:
// 			result.push(deque.length !== 0 ? deque[0] : -1);
// 			break;
// 		case 8:
// 			result.push(deque.length !== 0 ? deque[deck.length - 1] : -1);
// 			break;
// 		default:
// 			break;
// 	}
// });

// console.log(result.join('\n'));
