function solution(s) {
	let arr = s.split(' ');
	let answer = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'Z') {
			answer -= Number(arr[i - 1]);
		} else {
			answer += Number(arr[i]);
		}
	}

	return answer;
}
