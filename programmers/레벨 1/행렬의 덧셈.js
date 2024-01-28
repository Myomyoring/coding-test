function solution(arr1, arr2) {
	const answer = [];
	for (let i = 0; i < arr1.length; i++) {
		let tmp = [];
		for (let j = 0; j < arr1[0].length; j++) {
			let sum = arr1[i][j] + arr2[i][j];
			tmp.push(sum);
		}
		answer.push(tmp);
	}
	return answer;
}
