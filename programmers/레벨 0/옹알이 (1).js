function solution(babbling) {
	let answer = 0;
	const arr = ['aya', 'ye', 'woo', 'ma'];
	babbling.forEach((str) => {
		let tmp = str;
		arr.forEach((say) => {
			tmp = tmp.replaceAll(say, ' ');
		});
		tmp = tmp.trim();
		if (tmp === '') answer++;
	});
	return answer;
}
