const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

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
	unshift(value) {
		const newNode = new Node(value);
		if (!this.length) {
			if (!this.head) this.head = newNode;
			if (!this.tail) this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}

		this.length++;
	}
	push(value) {
		const newNode = new Node(value);
		if (!this.length) {
			if (!this.head) this.head = newNode;
			if (!this.tail) this.tail = newNode;
		} else {
			newNode.prev = this.tail;
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}
	shift() {
		if (!this.head) return;
		const value = this.head.value;
		if (this.head.next) {
			this.head = this.head.next;
			this.head.prev = null;
		} else {
			this.head = null;
			this.tail = null;
		}
		this.length--;
		return value;
	}
}
const deque = new SingleLikedList();
const C = input.pop().split(' ');
const CLen = input.pop();
const B = input.pop().split(' ');
const A = input.pop().split(' ');
const ABLen = Number(input.pop());
const result = [];
for (let i = 0; i < ABLen; i++) {
	if (A[i] === '0') deque.unshift(B[i]);
}
for (let i = 0; i < CLen; i++) {
	deque.push(C[i]);
	result.push(deque.shift());
}

console.log(result.join(' '));
