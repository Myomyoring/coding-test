function solution(k, score) {
	const answer = [];
	const hall = [];
	for (let s of score) {
		const min = Math.min(...hall);
		if (min < s || hall.length < k) {
			hall.push(s);
		}
		hall.sort((a, b) => b - a);
		if (hall.length > k) {
			hall.pop();
		}
		answer.push(Math.min(...hall));
	}
	return answer;
}
