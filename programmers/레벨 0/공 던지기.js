function solution(numbers, k) {
	const answer = [];
	const odd = numbers.filter((num) => num % 2 !== 0);
	const even = numbers.filter((num) => num % 2 === 0);
	if (numbers.length % 2 === 0) {
		while (answer.length < k) {
			for (let i of odd) {
				answer.push(i);
			}
		}
	} else {
		while (answer.length < k) {
			for (let i of odd) {
				answer.push(i);
			}
			for (let i of even) {
				answer.push(i);
			}
		}
	}
	return answer[k - 1];
}
