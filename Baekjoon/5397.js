const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(input[0]);
const results = [];

function testCase(commands) {
  const left = [];
  const right = [];

  function moveLeft() {
    if (left.length > 0) {
      right.push(left.pop());
    }
  }

  function moveRight() {
    if (right.length > 0) {
      left.push(right.pop());
    }
  }

  function deleteChar() {
    if (left.length > 0) {
      left.pop();
    }
  }

  function insertChar(char) {
    left.push(char);
  }

  for (const command of commands) {
    if (command === "<") {
      moveLeft();
    } else if (command === ">") {
      moveRight();
    } else if (command === "-") {
      deleteChar();
    } else {
      insertChar(command);
    }
  }

  return left.concat(right.reverse()).join("");
}

for (let i = 1; i <= n; i++) {
  const commands = input[i];
  const result = testCase(commands);
  results.push(result);
}

console.log(results.join("\n"));
