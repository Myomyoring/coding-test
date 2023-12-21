const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);
const str = new Set(input.slice(0, n));
const myStr = input.slice(n, n + m);
let cnt = 0;
myStr.forEach((el) => {
	if (str.has(el)) {
		cnt++;
	}
});
console.log(cnt);
