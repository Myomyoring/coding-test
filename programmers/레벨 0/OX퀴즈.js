function solution(quiz) {
	const answer = [];

	quiz.forEach((q) => {
		let arr = q.split(' ');
		if (arr[1] === '+') {
			answer.push(Number(arr[0]) + Number(arr[2]) === Number(arr[4]) ? 'O' : 'X');
		} else if (arr[1] === '-') {
			answer.push(Number(arr[0]) - Number(arr[2]) === Number(arr[4]) ? 'O' : 'X');
		}
	});

	return answer;
}
