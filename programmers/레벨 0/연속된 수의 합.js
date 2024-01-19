function solution(num, total) {
	let answer = [];
	const arr = Array.from({ length: 200 - -50 + 1 }, (_, i) => -50 + i);

	for (let i = 0; i < arr.length; i++) {
		let cut = arr.slice(i, i + num);
		let sum = cut.reduce((arr, curr) => arr + curr);
		if (sum === total) {
			answer = cut;
			break;
		}
	}
	answer.sort((a, b) => a - b);
	return answer;
}
