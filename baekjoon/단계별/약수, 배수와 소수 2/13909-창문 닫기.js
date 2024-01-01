// 실습실이 얼마나 크길래 21억개 창문이..?
const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
console.log(Math.floor(Math.sqrt(n)));
// let windows = new Array(n + 1).fill(0);
// function control(num) {
// 	for (let j = num; j <= n; j += num) {
// 		windows[j - 1] === 0 ? (windows[j - 1] = 1) : (windows[j - 1] = 0);
// 	}
// }

// for (let i = 1; i <= n; i++) {
// 	control(i);
// }

// const open = windows.filter((num) => num === 1);
// console.log(open.length);
