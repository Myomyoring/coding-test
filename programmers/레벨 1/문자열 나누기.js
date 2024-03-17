function solution(s) {
	let answer = 0;
	let idx = 1;
	let diff = 0;
	let same = 1;

	while (s.length > 0) {
		s[0] === s[idx] ? same++ : diff++;

		if (diff === same) {
			s = s.substring(idx + 1);
			idx = 1;
			diff = 0;
			same = 1;
			answer++;
		} else {
			idx++;
			if (idx === s.length - 1) {
				answer++;
				break;
			}
		}
	}
	return answer;
}
