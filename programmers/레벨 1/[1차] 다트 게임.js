function solution(dartResult) {
	const answer = [];
	const areas = ['S', 'D', 'T'];
	for (let i = 0; i < dartResult.length; i++) {
		if (areas.some((area) => area === dartResult[i])) {
			const prev1 = +dartResult[i - 1];
			const prev2 = +dartResult[i - 2];
			const score = isNaN(prev2) ? prev1 : +`${prev2}${prev1}`;
			answer.push(Math.pow(score, areas.indexOf(dartResult[i]) + 1));
		}
		if (dartResult[i] === '*') {
			answer[answer.length - 1] = answer[answer.length - 1] * 2;
			if (answer[answer.length - 2]) {
				answer[answer.length - 2] = answer[answer.length - 2] * 2;
			}
		}
		if (dartResult[i] === '#') {
			answer[answer.length - 1] = answer[answer.length - 1] * -1;
		}
	}

	return answer.reduce((acc, curr) => acc + curr, 0);
}
