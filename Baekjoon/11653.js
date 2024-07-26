const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const n = input[0];

function prime(n) {
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      n = n / i;
      console.log(i);
      i = 1;
    }
  }
}

prime(n);
