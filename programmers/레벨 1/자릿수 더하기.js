function solution(n) {
	return n
		.toString()
		.split('')
		.map(Number)
		.reduce((acc, curr) => acc + curr);
}
