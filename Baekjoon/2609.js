// 최대공약수와 최소공배수

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let n = Number(input[0]);
let m = Number(input[1]);

function gcd(a, b) {
  while (a % b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return b;
}
console.log(gcd(n, m));
console.log((n * m) / gcd(n, m));
