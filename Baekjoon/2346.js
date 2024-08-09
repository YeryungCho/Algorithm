const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const n = Number(input[0]);

let deck = input[1].split(" ").map(Number);
let deque = [];
for (let i = 0; i < n; i++) {
  deque.push({ value: deck[i], index: i + 1 });
}

console.log(deque);

const result = [];

while (deque.length > 0) {
  // 현재 풍선의 인덱스 저장
  const currentBalloon = deque.shift(); // 큐의 앞에서 제거
  result.push(currentBalloon.index);

  // 이동할 인덱스 계산
  const move = currentBalloon.value;

  if (deque.length > 0) {
    // move는 1부터 시작하므로 -1을 해줘야 합니다
    const steps = move - 1;
    if (steps > 0) {
      for (let i = 0; i < steps; i++) {
        deque.push(deque.shift()); // 큐의 뒤로 이동
      }
    } else if (steps < 0) {
      for (let i = steps; i < 0; i++) {
        deque.unshift(deque.pop()); // 큐의 앞에서 제거 후 뒤로 이동
      }
    }
  }
}
console.log(result.join(" "));
