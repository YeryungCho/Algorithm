const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const computerCount = Number(input[0]);

const lineCount = Number(input[1]);

const graph = Array.from({ length: computerCount + 1 }, () => []);

for (i = 2; i < lineCount + 2; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const BFS = (graph, startNode) => {
  const visited = [];
  const queue = [startNode];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      // 다음 탐색할 노드를 큐에 추가
      for (const neighbor of graph[node]) {
        if (!visited.includes(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return visited;
};

const bfsResult = BFS(graph, 1);
console.log(bfsResult.length - 1);
