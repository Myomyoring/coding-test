const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const A = a.split(' ').map(Number);
const B = b.split(' ').map(Number);

function gcd(a, b) {
	let tmp = 0;
	while (b !== 0) {
		tmp = a % b;
		a = b;
		b = tmp;
	}
	return a;
}

// 이 부분부터
let deno1 = [];
let deno2 = [];

deno1.push(A[0] * B[1]);
deno1.push(A[1] * B[1]);
deno2.push(B[0] * A[1]);
deno2.push(B[1] * A[1]);
// 이 부분까지 단축할 수 있는 부분

let result = [deno1[0] + deno2[0], deno1[1]];
let num = gcd(result[0], result[1]);

console.log(`${result[0] / num} ${result[1] / num}`);
