const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const score = { 'A+': 4.5, A0: 4.0, 'B+': 3.5, B0: 3.0, 'C+': 2.5, C0: 2.0, 'D+': 1.5, D0: 1.0, F: 0.0 };

function calculator(input) {
	let credit = 0;
	let rating = '';
	let totalCredit = 0;
	let totalRating = 0;
	for (let subject of input) {
		const cut = subject.split(' ');
		credit = Number(cut[1]);
		rating = cut[2];
		if (rating !== 'P') {
			totalCredit += credit;
			totalRating += credit * score[rating];
		}
	}
	return totalRating / totalCredit;
}

console.log(calculator(input));
