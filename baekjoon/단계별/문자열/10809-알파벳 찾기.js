const input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';
for (let i = 97; i <= 122; i++) {
  let char = String.fromCharCode(i);
  answer += `${input.indexOf(char)} `;
}

console.log(answer);
