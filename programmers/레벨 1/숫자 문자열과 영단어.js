function solution(s) {
	let answer = s;
	const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (let i = 0; i < nums.length; i++) {
		answer = answer.replaceAll(nums[i], i);
	}
	return +answer;
}
