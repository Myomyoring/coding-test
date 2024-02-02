function solution(s) {
	const rev = s.split('').reverse();
	const answer = [];
	for (let i = 0; i < s.length; i++) {
		let gap = 0;
		for (let j = i + 1; j < s.length; j++) {
			if (rev[i] === rev[j]) {
				gap = j - i;
				break;
			}
		}
		if (gap === 0) {
			answer.push(-1);
		} else answer.push(gap);
	}
	return answer.reverse();
}
