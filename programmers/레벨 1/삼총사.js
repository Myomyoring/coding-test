function solution(number) {
	const arr = [];
	for (let i = 0; i < number.length - 2; i++) {
		for (let j = i + 1; j < number.length - 1; j++) {
			for (let k = j + 1; k < number.length; k++) {
				arr.push(number[i] + number[j] + number[k]);
			}
		}
	}
	return arr.filter((num) => num === 0).length;
}
