function solution(n, m, section) {
	const wall = Array.from({ length: n }, (_, i) => i + 1);
	let answer = 1;
	let rolling = wall.slice(section[0] - 1, section[0] + m - 1);
	while (section.length !== 0) {
		if (rolling.includes(section[0])) {
			section.shift();
		} else {
			rolling = wall.slice(section[0] - 1, section[0] + m - 1);
			answer++;
		}
	}

	return answer;
}
