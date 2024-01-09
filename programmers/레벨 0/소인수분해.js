function solution(n) {
	let answer = new Set();
	let idx = 2;

	while (n >= 2) {
		if (n % idx === 0) {
			answer.add(idx);
			n = n / idx;
		} else {
			idx++;
		}
	}
	return [...answer].sort((a, b) => a - b);
}
