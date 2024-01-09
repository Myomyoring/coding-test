let [n, ...students] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = Number(n);
students = students.join('').split(' ').map(Number);

const stack = [];
let num = 1;

students.forEach((student) => {
	while (stack[stack.length - 1] === num) {
		stack.pop();
		n--;
		num++;
	}
	if (student === num) {
		n--;
		num++;
	} else {
		stack.push(student);
	}
});

while (stack.pop() === num) {
	n--;
	num++;
}

console.log(n === 0 ? 'Nice' : 'Sad');

// 틀렸던 코드

// let [n, ...students] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// n = Number(n);
// students = students.join('').split(' ').map(Number);

// const stack = [];
// let num = 1;

// students.forEach((student) => {
// 	if (student === num) {
// 		n--;
// 		num++;
// 	} else if (stack[stack.length - 1] === num) {
// 		stack.push(student);
// 		stack.pop();
// 		n--;
// 		num++;
// 	} else {
// 		stack.push(student);
// 	}
// });

// while (n !== 0) {
// 	if (stack[stack.length - 1] === num) {
// 		stack.pop();
// 		n--;
// 		num++;
// 	} else {
// 		break;
// 	}
// }

// console.log(n === 0 ? 'Nice' : 'Sad');
