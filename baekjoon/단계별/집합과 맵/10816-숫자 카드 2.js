const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = input.shift();
const cards = input.shift().split(' ').map(Number);
const m = input.shift();
const myCards = input.shift().split(' ').map(Number);

const map = new Map();

for (let i of cards) {
	if (map.get(i)) {
		let cnt = map.get(i) + 1;
		map.set(i, cnt);
	} else {
		map.set(i, 1);
	}
}

const result = [];

for (let num of myCards) {
	if (map.get(num)) {
		result.push(map.get(num));
	} else {
		result.push(0);
	}
}

console.log(result.join(' '));
