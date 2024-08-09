const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const numbers = [];

function pushHeap(numbers, value) {
  numbers.push(value);
  numbers.sort((a, b) => b - a);
  if (numbers.length > N) {
    numbers.pop();
  }
}

for (let i = 1; i <= N; i++) {
  const row = input[i].split(" ").map(Number);
  for (const num of row) {
    pushHeap(numbers, num);
  }
}

const answer = numbers[N - 1];
console.log(answer);
