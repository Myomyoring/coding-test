function solution(name, yearning, photo) {
	let obj = {};
	const answer = [];
	for (let i = 0; i < name.length; i++) {
		obj[name[i]] = yearning[i];
	}
	for (let picture of photo) {
		let sum = 0;
		for (let i = 0; i < picture.length; i++) {
			if (obj[picture[i]]) {
				sum += obj[picture[i]];
			}
		}
		answer.push(sum);
	}
	return answer;
}
