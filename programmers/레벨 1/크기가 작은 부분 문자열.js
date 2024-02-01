function solution(t, p) {
	const arr = [];
	const size = p.length;

	for (let i = 0; i <= t.length - size; i++) {
		arr.push(+t.substring(i, i + size));
	}
	return arr.filter((num) => num <= +p).length;
}
