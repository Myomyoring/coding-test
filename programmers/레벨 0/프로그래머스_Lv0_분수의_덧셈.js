function u_c(a, b) {
	return a % b === 0 ? b : u_c(b, a % b);
}
function solution(numer1, denom1, numer2, denom2) {
	let n = denom1 * numer2 + denom2 * numer1;
	let d = denom1 * denom2;
	let gcd = u_c(n, d);
	return [n / gcd, d / gcd];
}
