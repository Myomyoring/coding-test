const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
function factorial(n) {
	let num = 1;
	for (let i = 1; i <= n; i++) {
		num *= i;
	}
	return num;
}
console.log(n <= 1 ? 1 : factorial(n));
