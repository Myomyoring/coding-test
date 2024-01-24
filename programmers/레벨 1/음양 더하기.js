function solution(absolutes, signs) {
	const num = [];
	for (let i = 0; i < signs.length; i++) {
		num.push(signs[i] ? absolutes[i] : 0 - absolutes[i]);
	}
	return num.reduce((acc, curr) => acc + curr);
}
