const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

// 그래프 인접 리스트 초기화
const graph = Array.from({ length: N + 1 }, () => []);

// 간선 정보 입력 처리
for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

// 인접 리스트를 오름차순으로 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS 구현
const DFS = (graph, startNode) => {
  const visited = [];
  const stack = [startNode];

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.includes(node)) {
      visited.push(node);
      // 다음 탐색할 노드를 스택에 추가
      for (let i = graph[node].length - 1; i >= 0; i--) {
        const neighbor = graph[node][i];
        if (!visited.includes(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return visited;
};

// BFS 구현
const BFS = (graph, startNode) => {
  const visited = [];
  const queue = [startNode];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      for (const neighbor of graph[node]) {
        if (!visited.includes(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return visited;
};

// DFS와 BFS 결과 출력
const dfsResult = DFS(graph, V);
const bfsResult = BFS(graph, V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
