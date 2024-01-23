const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
const topStar = [];

for (let i = 1; i <= n; i++) {
	let line = '';
	for (let j = n - i; j >= 1; j--) {
		line += ' ';
	}
	for (let j = 1; j <= i * 2 - 1; j++) {
		line += '*';
	}
	topStar.push(line);
}
const bottomStar = [...topStar].reverse();
bottomStar.shift();

console.log(`${topStar.join('\n')}\n${bottomStar.join('\n')}`);
