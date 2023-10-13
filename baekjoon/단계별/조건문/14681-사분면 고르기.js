/** runtime error : !readFileSync("/dev/stdin")*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const A = parseInt(input[0]);
const B = parseInt(input[1]);

if (A > 0 && B > 0) {
  console.log(1);
} else if (A > 0 && B < 0) {
  console.log(4);
} else if (A < 0 && B > 0) {
  console.log(2);
} else {
  console.log(3);
}
