function solution(answers) {
	const answer = [];

	const arr1 = [1, 2, 3, 4, 5];
	const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
	const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

	const person = [0, 0, 0];

	let idx1 = 0;
	let idx2 = 0;
	let idx3 = 0;

	for (let correct of answers) {
		if (correct === arr1[idx1]) person[0]++;
		if (correct === arr2[idx2]) person[1]++;
		if (correct === arr3[idx3]) person[2]++;
		idx1 === 4 ? (idx1 = 0) : idx1++;
		idx2 === 7 ? (idx2 = 0) : idx2++;
		idx3 === 9 ? (idx3 = 0) : idx3++;
	}
	const max = Math.max(...person);

	person.forEach((num, idx) => {
		if (num === max) {
			answer.push(idx + 1);
		}
	});
	return answer;
}
