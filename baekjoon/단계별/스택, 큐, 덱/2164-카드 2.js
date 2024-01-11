// const n = Number(require('fs').readFileSync('dev/stdin').toString().trim());
// const cards = Array.from({ length: n }, (_, i) => i + 1);

// while (cards.length !== 1) {
// 	cards.shift();
// 	cards.push(cards.shift());
// }

// console.log(cards.join(''));

const n = Number(require('fs').readFileSync('dev/stdin').toString().trim());
const cards = Array.from({ length: n }, (_, i) => i + 1);

class Node {
	prev = null;
	next = null;
	constructor(value) {
		this.value = value;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		}
		if (this.tail) {
			this.tail.next = newNode;
			newNode.prev = this.tail;
		}
		this.tail = newNode;
		this.length++;
	}
	pop() {
		const value = this.head.value;
		this.head = this.head.next;
		this.length--;
		return value;
	}
	size() {
		return this.length;
	}
	front() {
		return this.head.value;
	}
}

const queue = new SinglyLinkedList();

for (let i of cards) {
	queue.push(i);
}

while (queue.size() !== 1) {
	queue.pop();
	queue.push(queue.pop());
}

console.log(queue.front());
