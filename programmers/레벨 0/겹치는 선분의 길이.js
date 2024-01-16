function solution(lines) {
	let answer = 0;
	let line = new Array(200).fill(0);

	for (let i = 0; i < lines.length; i++) {
		let [left, right] = lines[i];
		for (let j = left; j < right; j++) {
			line[j + 100] += 1;
		}
	}
	for (let i in line) {
		if (line[i] > 1) {
			answer++;
		}
	}
	return answer;
}
