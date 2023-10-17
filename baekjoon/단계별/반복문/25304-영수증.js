const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const totalPrice = parseInt(input[0]);
const count = parseInt(input[1]);
let itemsPrice = 0;

for (let i = 1; i <= count; i++) {
  let item = input[1 + i].split(" ").map(Number);
  itemsPrice += item[0] * item[1];
}

console.log(itemsPrice === totalPrice ? "Yes" : "No");
