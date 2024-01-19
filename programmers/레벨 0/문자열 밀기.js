function solution(A, B) {
	let tf = false;
	let answer = 0;
	const a = [...A];
	const b = [...B];

	for (let i = 0; i < a.length; i++) {
		let strA = a.join('');
		let strB = b.join('');
		if (strA === strB) {
			tf = true;
			break;
		}

		let last = a.pop();
		a.unshift(last);
		answer++;
	}
	return tf ? answer : -1;
}
