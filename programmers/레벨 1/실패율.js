function solution(N, stages) {
	const lengths = [];
	for (let i = 0; i < N; i++) {
		const length = stages.filter((num) => num === i + 1).length;
		const total = stages.filter((num) => num > i).length;
		lengths[i] = [i + 1, length / total];
	}
	lengths.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

	return lengths.map((el) => el[0]);
}
