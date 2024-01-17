function solution(score) {
	const arr = [];
	const answer = [];
	for (let i = 0; i < score.length; i++) {
		let ave = Math.ceil((score[i][0] + score[i][1]) / 2);
		arr.push({ ave: ave, idx: i });
	}
	arr.sort((a, b) => b.ave - a.ave);

	for (let i = 0; i < arr.length; i++) {
		arr[i]['rank'] = i + 1;
	}
	for (let i = 0; i < arr.length; i++) {
		let same = arr.filter((el) => arr[i].ave === el.ave);
		if (same.length > 1) {
			let min = 100;
			for (let el of same) {
				min = Math.min(min, el.rank);
			}
			for (let el of same) {
				el['rank'] = min;
			}
		}
		i += same.length - 1;
	}
	arr.sort((a, b) => a.idx - b.idx);
	for (let el of arr) {
		answer.push(el.rank);
	}
	return answer;
}
