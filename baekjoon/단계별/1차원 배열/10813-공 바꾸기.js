const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [n, m] = input[0].split(' ');
let baguni = [];
let answer = '';
for (let i = 0; i < n; i++) {
  baguni[i] = i + 1;
}

for (let i = 1; i <= m; i++) {
  let test = input[i].split(' ').map(Number);
  let tmp = baguni[test[0] - 1];
  baguni[test[0] - 1] = baguni[test[1] - 1];
  baguni[test[1] - 1] = tmp;
}

for (let i = 0; i < n; i++) {
  answer += `${baguni[i]} `;
}

console.log(answer);
