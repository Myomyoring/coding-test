function solution(food) {
	const answer = [];
	for (let i = 1; i < food.length; i++) {
		if (food[i] % 2 === 0) {
			answer.push(`${i}`.repeat(food[i] / 2));
		} else if (food[i] % 2 !== 0 && food[i] !== 1) {
			answer.push(`${i}`.repeat((food[i] - 1) / 2));
		}
	}
	answer.push(0, [...answer].reverse());
	return answer.flat().join('');
}
