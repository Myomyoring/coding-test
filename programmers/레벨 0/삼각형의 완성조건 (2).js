function solution(sides) {
	const max = Math.max(...sides);
	const min = Math.min(...sides);
	const sum = max + min;
	const sub = max - min;

	let answer = 0;
	for (let i = sub + 1; i <= max; i++) {
		answer++;
	}

	for (let i = sum - 1; i > max; i--) {
		answer++;
	}

	return answer;
}
