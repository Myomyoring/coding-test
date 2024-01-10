// 단계별 풀이 중 큐 자료구조가 없는 js에서는 난데없는 난이도;; 단일 연결 리스트 (Singly linked list)를 사용하지 않으면 시간초과 남
// 즉 O(n) 시간복잡도를 가진 shift()를 직접 구현하라는 문제임
// 노드는 앞뒤에만 영향이 가지만 배열은 요소의 추가, 삭제 시 모든 기존 요소들이 인덱스를 다시 받아야 해서 비용이 더 듬
// 긴 데이터에서 추가, 삭제를 주로 하는 경우엔 연결 리스트를 사용하는 것이 효율 적
// 연결 리스트 기본 자료구조가 Node 클래스이기 때문에 class를 이용하여 풀이

const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

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
		if (this.length === 0) return -1;
		const value = this.head.value;
		this.head = this.head.next;
		this.length--;
		return value;
	}
	size() {
		return this.length;
	}
	empty() {
		return this.length === 0 ? 1 : 0;
	}
	front() {
		return this.length === 0 ? -1 : this.head.value;
	}
	back() {
		return this.length === 0 ? -1 : this.tail.value;
	}
}

const queue = new SinglyLinkedList();
let result = '';
for (let el of input) {
	const [command, int] = el.split(' ');
	switch (command) {
		case 'push':
			queue.push(int);
			break;
		case 'pop':
			result += `${queue.pop()}\n`;
			break;
		case 'size':
			result += `${queue.size()}\n`;
			break;
		case 'empty':
			result += `${queue.empty()}\n`;
			break;
		case 'front':
			result += `${queue.front()}\n`;
			break;
		case 'back':
			result += `${queue.back()}\n`;
			break;
		default:
			break;
	}
}

console.log(result);

// const [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// const queue = [];
// const result = [];
// for (let el of input) {
// 	const [command, int] = el.split(' ');

// 	switch (command) {
// 		case 'push':
// 			queue.push(int);
// 			break;
// 		case 'pop':
// 			result.push(queue.length === 0 ? -1 : queue.shift());
// 			break;
// 		case 'size':
// 			result.push(queue.length);
// 			break;
// 		case 'empty':
// 			result.push(queue.length === 0 ? 1 : 0);
// 			break;
// 		case 'front':
// 			result.push(queue.length === 0 ? -1 : queue[0]);
// 			break;
// 		case 'back':
// 			result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
// 			break;
// 		default:
// 			break;
// 	}
// }

// console.log(result.join('\n'));
