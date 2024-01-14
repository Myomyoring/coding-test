function solution(spell, dic) {
	let answer = 2;
	dic.forEach((word) => {
		let tmp = spell.map((el) => el);
		for (let char of spell) {
			if (word.includes(char)) {
				let idx = tmp.indexOf(char);
				tmp.splice(idx, 1);
			}
			if (tmp.length === 0) answer = 1;
		}
	});

	return answer;
}
