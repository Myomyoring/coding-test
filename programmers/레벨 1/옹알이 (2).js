function solution(babbling) {
	let answer = 0;
	const words = ['aya', 'ye', 'woo', 'ma'];
	for (let bab of babbling) {
		for (let word of words) {
			if (bab.includes(word.repeat(2))) break;
			bab = bab.replaceAll(word, ' ');
		}
		if (bab.split(' ').join('') === '') answer++;
	}
	return answer;
}
