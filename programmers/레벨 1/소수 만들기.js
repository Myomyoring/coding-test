function solution(nums) {
	const sums = [];
	let answer = 0;

	for (let i = 0; i < nums.length - 2; i++) {
		for (let j = i + 1; j < nums.length - 1; j++) {
			for (let k = j + 1; k < nums.length; k++) {
				sums.push(nums[i] + nums[j] + nums[k]);
			}
		}
	}
	for (let sum of sums) {
		let div = 0;
		for (let i = 1; i <= Math.sqrt(sum); i++) {
			if (sum % i === 0) {
				div++;
				if (sum / i !== i) {
					div++;
				}
			}
		}
		if (div === 2) answer++;
	}
	return answer;
}
