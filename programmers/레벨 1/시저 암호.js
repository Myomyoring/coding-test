function solution(s, n) {
	let answer = '';
	for (let i = 0; i < s.length; i++) {
		if (s[i] === ' ') {
			answer += s[i];
		} else {
			let code = s.charCodeAt(i);
			if (code > 96) {
				if (code + n > 122) {
					answer += String.fromCharCode(code + n - 26);
				} else {
					answer += String.fromCharCode(code + n);
				}
			} else if (code < 97) {
				if (code + n > 90) {
					answer += String.fromCharCode(code + n - 26);
				} else {
					answer += String.fromCharCode(code + n);
				}
			}
		}
	}
	return answer;
}
