const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let answer = 0;
let arr = ['', '', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ', ''];

for (let i in arr) {
 let valid = arr[i].split('');
 for (let j in input) {
  if (valid.includes(input[j])) {
   answer += Number(i) + 1;
  }
 }
}
console.log(answer);
