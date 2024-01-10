function solution(numbers) {
	const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	let str = '';
	let answer = '';

	for (let i = 0; i < numbers.length; i++) {
		str += numbers[i];
		if (nums.includes(str)) {
			answer += `${nums.indexOf(str)}`;
			str = '';
		}
	}

	return +answer;
}
