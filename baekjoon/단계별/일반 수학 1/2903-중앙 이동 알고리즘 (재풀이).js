const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim());
let result = 3;
let side = 2;
for (let i = 2; i <= n; i++) {
	result += side;
	side = side * 2;
}

console.log(result * result);
