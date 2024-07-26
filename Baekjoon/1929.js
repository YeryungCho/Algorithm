const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const start = Number(input[0]);
const end = Number(input[1]);

const isPrime = Array(end + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= end; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= end; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = start; i <= end; i++) {
  if (isPrime[i]) {
    console.log(i);
  }
}
