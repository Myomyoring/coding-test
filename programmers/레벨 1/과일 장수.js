function solution(k, m, score) {
	let answer = 0;
	let box = [];
	score.sort((a, b) => a - b);

	for (let i = score.length - 1; i >= 0; i--) {
		let price = 0;
		if (score.length >= m) {
			for (let j = m; j > 0; j--) {
				box.push(score.pop());
			}
			answer += Math.min(...box) * m;
			box = [];
		} else break;
	}
	return answer;
}
