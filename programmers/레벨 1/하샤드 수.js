function solution(x) {
	return (
		x %
			x
				.toString()
				.split('')
				.map(Number)
				.reduce((acc, curr) => acc + curr) ===
		0
	);
}
