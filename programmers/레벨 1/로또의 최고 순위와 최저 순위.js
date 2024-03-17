function solution(lottos, win_nums) {
	const answer = [];
	const ranks = [6, 5, 4, 3, 2];
	let cnt = 0;
	lottos.forEach((num) => {
		if (win_nums.includes(num)) cnt++;
	});
	const best = ranks.indexOf(lottos.filter((num) => num === 0).length + cnt) + 1;
	const worst = ranks.indexOf(cnt) + 1;
	answer.push(best === 0 ? 6 : best);
	answer.push(worst === 0 ? 6 : worst);

	return answer;
}
