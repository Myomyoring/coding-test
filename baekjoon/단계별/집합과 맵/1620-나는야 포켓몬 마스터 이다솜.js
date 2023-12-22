const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

const list = input.slice(0, n);
const question = input.slice(n, n + m);
const nameBook = new Map();
const numBook = new Map();
for (let i in list) {
	nameBook.set(+i + 1, list[i]);
	numBook.set(list[i], +i + 1);
}

const result = [];
question.forEach((el) => {
	if (isNaN(el)) {
		result.push(numBook.get(el));
	} else {
		result.push(nameBook.get(+el));
	}
});

console.log(result.join('\n'));
