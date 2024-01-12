function solution(polynomial) {
	let arr = polynomial.split(' + ');
	let x = 0;
	let num = 0;

	for (let hang of arr) {
		if (hang.includes('x')) {
			if (hang.length === 1) {
				x++;
			} else {
				x += Number(hang.substring(0, hang.length - 1));
			}
		} else {
			num += Number(hang);
		}
	}

	if (num !== 0 && x !== 0) {
		if (x === 1) {
			return `x + ${num}`;
		} else return `${x}x + ${num}`;
	} else if (x === 0) {
		return `${num}`;
	} else if (num === 0) {
		if (x !== 1) {
			return `${x}x`;
		} else return `x`;
	}
}
