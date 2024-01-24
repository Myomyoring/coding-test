const [y, g] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function gcd(a, b) {
	let tmp = 0;
	while (b !== 0) {
		tmp = a % b;
		a = b;
		b = tmp;
	}
	return a;
}
const gcdNum = gcd(y, g);
console.log(`${gcdNum}\n${(y * g) / gcdNum}`);
