const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let now = input[0].split(" ").map(Number);
let H = now[0];
let M = now[1];
let add = parseInt(input[1]);

let C = H;
let D = M + add;

C = (Math.floor(D / 60) + H) % 24;
D = D % 60;

console.log(`${C} ${D}`);
