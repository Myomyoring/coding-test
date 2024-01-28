function solution(n, m) {
	function gcd(a, b) {
		let tmp = 0;
		while (b !== 0) {
			tmp = a % b;
			a = b;
			b = tmp;
		}
		return a;
	}
	const num = gcd(n, m);
	return [num, (n * m) / num];
}
