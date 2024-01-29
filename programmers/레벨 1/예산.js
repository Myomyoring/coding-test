function solution(d, budget) {
	let answer = 0;
	let total = 0;
	d.sort((a, b) => a - b);
	d.forEach((num) => {
		if (total + num <= budget) {
			total += num;
			answer++;
		}
	});
	return answer;
}
