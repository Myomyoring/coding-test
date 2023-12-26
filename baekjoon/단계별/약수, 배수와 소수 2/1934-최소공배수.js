const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const t = input.shift();
const result = [];

// 유클리드 호제법
function gcd(a, b) {
	let tmp = 0;
	while (b !== 0) {
		tmp = a % b;
		a = b;
		b = tmp;
	}
	return a;
}

for (let i = 0; i < t; i++) {
	let [a, b] = input[i].split(' ').map(Number);
	let num = gcd(a, b);
	// 최소 공배수 = 수1 * 수2 / 최대공약수
	result.push((a * b) / num);
}

console.log(result.join('\n'));
