const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt);
function gcd(a, b) {
	let tmp = 0;
	while (b !== 0n) {
		tmp = a % b;
		a = b;
		b = tmp;
	}
	return a;
}

let num = gcd(a, b);
console.log(`${(a * b) / num}`);
