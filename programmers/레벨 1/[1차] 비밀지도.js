function solution(n, arr1, arr2) {
	const answer = [];
	for (let i = 0; i < n; i++) {
		const map1 = arr1[i].toString(2).padStart(n, 0);
		const map2 = arr2[i].toString(2).padStart(n, 0);
		let line = '';
		for (let j = 0; j < n; j++) {
			if (map1[j] === '1' || map2[j] === '1') {
				line += '#';
			} else line += ' ';
		}
		answer.push(line);
	}
	return answer;
}
