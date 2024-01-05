function solution(s) {
	const answer = [];
	let arr = s.split('');
	for (let el of arr) {
		let cnt = arr.filter((letter) => letter === el);
		if (cnt.length === 1) answer.push(el);
	}
	answer.sort();
	return answer.join('');
}
