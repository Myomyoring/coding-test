const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [n, m] = input[0].split(' ');
let baguni = Array(Number(n)).fill(0);
let answer = '';
for (let i = 1; i <= m; i++) {
  let test = input[i].split(' ').map(Number);
  for (let j = test[0] - 1; j < test[1]; j++) {
    baguni[j] = test[2];
  }
}

for (let i = 0; i < baguni.length; i++) {
  answer += `${baguni[i]} `;
}

console.log(answer);
