function solution(array) {
	let cnt = {};
	for (let i of array) {
		if (cnt[i]) {
			cnt[i] = Number(cnt[i]) + 1;
		} else {
			cnt[i] = 1;
		}
	}
	let max = Math.max(...Object.values(cnt));
	let result = Object.keys(cnt).filter((key) => cnt[key] === max);
	return result.length > 1 ? -1 : +result;
}
