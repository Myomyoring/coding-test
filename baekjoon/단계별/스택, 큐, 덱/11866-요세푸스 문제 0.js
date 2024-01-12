const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const circle = Array.from({ length: input[0] }, (_, i) => i + 1);
const result = [];
class Node {
	next = null;
	constructor(value) {
		this.value = value;
	}
}

class SingleLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this.length;
	}
	pop() {
		if (!this.head) return null;
		let node = this.head;
		if (this.head === this.tail) this.tail = null;
		this.head = this.head.next;
		this.length--;
		return node.value;
	}
	size() {
		return this.length;
	}
}
const queue = new SingleLinkedList();
for (let num of circle) {
	queue.push(num);
}

while (queue.size() > 0) {
	for (let i = 1; i < input[1]; i++) {
		queue.push(queue.pop());
	}
	result.push(queue.pop());
}

console.log(`<${result.join(', ')}>`);
