function solution(numlist, n) {
	const arr = [];
	const result = [];
	for (let i = 0; i < numlist.length; i++) {
		let [min, max] = [Math.min(n, numlist[i]), Math.max(n, numlist[i])];
		let sub = max - min;
		arr.push({ sub: sub, num: numlist[i] });
	}
	arr.sort((a, b) => a.sub - b.sub || b.num - a.num);
	arr.forEach((el) => result.push(el.num));
	return result;
}
