function solution(number, limit, power) {
	const lengths = [];

	for (let i = 1; i <= number; i++) {
		let length = 0;
		for (let j = 1; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				length++;
				if (i / j !== j) {
					length++;
				}
			}
		}
		lengths.push(length);
	}
	const max = Math.max(...lengths);
	if (max <= limit) {
		return lengths.reduce((acc, curr) => acc + curr, 0);
	} else {
		const cut = lengths.filter((num) => num <= limit);
		return cut.reduce((acc, curr) => acc + curr, 0) + (lengths.length - cut.length) * power;
	}
}
