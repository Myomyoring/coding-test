function solution(my_string) {
	const arr = my_string.split('');
	const nums = [];

	for (let i = 0; i < arr.length; i++) {
		let num = Number(arr[i]);
		let realNum = '';

		if (!isNaN(num)) {
			realNum = arr[i];
			let cnt = 1;
			let next = arr[i + cnt];

			while (!isNaN(Number(next)) && next) {
				realNum += next;
				cnt++;
				next = arr[i + cnt];
			}
			i += cnt - 1;
		}
		nums.push(Number(realNum));
	}

	return nums.reduce((acc, curr) => acc + curr, 0);
}
