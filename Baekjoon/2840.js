const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);

let wheel = Array(N).fill("?");
let index = 0;
let isValid = true;

for (let i = 1; i <= K; i++) {
  const [S, alphabet] = input[i].split(" ");
  const num = parseInt(S, 10);

  index = (index + num) % N;

  if (wheel[index] !== "?") {
    if (wheel[index] !== alphabet) {
      isValid = false;
    }
  } else {
    wheel[index] = alphabet;
  }
}

if (isValid) {
  const seen = new Set();
  for (const char of wheel) {
    if (char !== "?" && seen.has(char)) {
      isValid = false;
      break;
    }
    seen.add(char);
  }
}

if (isValid) {
  let result = "";
  for (let i = 0; i < N; i++) {
    result += wheel[index];
    index = (index - 1 + N) % N;
  }
  console.log(result);
} else {
  console.log("!");
}
