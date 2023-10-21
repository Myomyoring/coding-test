const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let test = input[i].split(" ");
  console.log(parseInt(test[0]) + parseInt(test[1]));
}
