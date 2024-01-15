function solution(n) {
	const arr = Array.from({ length: 200 }, (_, i) => i + 1);
	const copy = arr.map((el) => el);
	for (let num of copy) {
		if (num % 3 === 0 || num.toString().includes('3')) {
			let idx = arr.indexOf(num);
			arr.splice(idx, 1);
		}
	}
	return arr[n - 1];
}
