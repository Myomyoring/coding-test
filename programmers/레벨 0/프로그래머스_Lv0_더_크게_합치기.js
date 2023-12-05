function solution(a, b) {
	var answer = 0;
	if (a === b) {
		answer = +`${a}${b}`;
	} else {
		let c = +`${Math.max(a, b)}${Math.min(a, b)}`;
		let d = +`${Math.min(a, b)}${Math.max(a, b)}`;
		answer = Math.max(c, d);
	}
	return answer;
}
