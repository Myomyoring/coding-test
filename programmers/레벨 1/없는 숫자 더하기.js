function solution(numbers) {
	let answer = 0;
	const arr = Array.from({ length: 10 }, (_, i) => i);
	arr.forEach((num) => {
		if (!numbers.includes(num)) answer += num;
	});
	return answer;
}
