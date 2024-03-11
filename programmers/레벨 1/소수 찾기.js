function solution(n) {
	let answer = 0;
	for (let i = 1; i <= n; i++) {
		let div = 0;
		for (let j = 1; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				div++;
				if (i / j !== j) {
					div++;
				}
			}
			if (div > 2) break;
		}
		if (div === 2) answer++;
	}
	return answer;
}
