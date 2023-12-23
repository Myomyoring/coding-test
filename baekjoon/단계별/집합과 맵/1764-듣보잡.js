const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const notHeardPerson = input.slice(0, n);
const notSeenPerson = input.slice(n, n + m);
const hearSet = new Set(notHeardPerson);
const seenSet = new Set(notSeenPerson);

const result = [];
hearSet.forEach((el) => {
	if (seenSet.has(el)) {
		result.push(el);
	}
});
result.sort();
console.log(`${result.length}\n${result.join('\n')}`);
