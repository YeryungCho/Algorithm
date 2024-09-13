const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const A = Number(input[0]);
const B = Number(input[1]);

// BFS (너비우선탐색) 사용
const BFS = (start, target) => {
  const queue = [[start, 1]];

  while (queue.length > 0) {
    const [currentNumber, count] = queue.shift(); // [현재 숫자, 연산 횟수]

    if (currentNumber === target) return count; // 연산의 최솟값

    const next1 = currentNumber * 2; // 2를 곱하기
    if (next1 <= target) {
      queue.push([next1, count + 1]);
    }

    const next2 = currentNumber * 10 + 1; // 1을 수의 가장 오른쪽에 추가하기
    if (next2 <= target) {
      queue.push([next2, count + 1]);
    }
  }

  return -1; // 만들수 없는 경우
};

const result = BFS(A, B);
console.log(result);
