// 큐

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let queue = [];
let result = [];

function push(n) {
  queue.push(n);
}

function pop() {
  if (queue.length === 0) {
    result.push(-1);
  } else {
    const n = queue.shift();
    result.push(n);
  }
}

function size() {
  result.push(queue.length);
}

function empty() {
  if (queue.length === 0) {
    result.push(1);
  } else {
    result.push(0);
  }
}

function front() {
  if (queue.length === 0) {
    result.push(-1);
  } else {
    result.push(queue[0]);
  }
}

function back() {
  if (queue.length === 0) {
    result.push(-1);
  } else {
    result.push(queue[queue.length - 1]);
  }
}

for (let i = 1; i < input.length; i++) {
  const [order, n] = input[i].split(" ");

  if (order === "push") {
    push(n);
  } else if (order === "pop") {
    pop();
  } else if (order === "size") {
    size();
  } else if (order === "empty") {
    empty();
  } else if (order === "front") {
    front();
  } else if (order === "back") {
    back();
  }
}

console.log(result.join("\n"));
