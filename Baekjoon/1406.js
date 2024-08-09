const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const left = [...input[0]]; // 커서 왼쪽의 텍스트
const right = []; // 커서 오른쪽의 텍스트
const N = Number(input[1]);

function L() {
  if (left.length > 0) {
    right.push(left.pop());
  }
}

function D() {
  if (right.length > 0) {
    left.push(right.pop());
  }
}

function B() {
  if (left.length > 0) {
    left.pop();
  }
}

function P(x) {
  left.push(x);
}

for (let i = 0; i < N; i++) {
  const [func, x] = input[i + 2].split(" ");

  if (func === "L") {
    L();
  } else if (func === "D") {
    D();
  } else if (func === "B") {
    B();
  } else if (func === "P") {
    P(x);
  }
}

const answer = left.concat(right.reverse()).join("");
console.log(answer);
