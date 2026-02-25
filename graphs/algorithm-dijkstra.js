class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
    this._siftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  get size() {
    return this.heap.length;
  }

  _siftUp(index) {
    let i = index;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent][0] <= this.heap[i][0]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  _siftDown(index) {
    let i = index;
    const length = this.heap.length;
    while (true) {
      const left = i * 2 + 1;
      const right = i * 2 + 2;
      let smallest = i;

      if (left < length && this.heap[left][0] < this.heap[smallest][0]) {
        smallest = left;
      }
      if (right < length && this.heap[right][0] < this.heap[smallest][0]) {
        smallest = right;
      }
      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }
}

function dijkstra(graph, start) {
  const minHeap = new MinHeap();
  minHeap.push([0, start]);

  const distances = {};

  for (const node in graph) {
    distances[node] = Infinity;
  }
  
  distances[start] = 0;

  while (minHeap.size > 0) {
    const [currentDistance, currentNode] = minHeap.pop();

    if (currentDistance > distances[currentNode]) continue;

    for (const neighbor in graph[currentNode]) {
      const weight = graph[currentNode][neighbor];
      const distance = currentDistance + weight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        minHeap.push([distance, neighbor]);
      }
    }
  }

  return distances;
}

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 },
};

const startNode = 'A';
const distances = dijkstra(graph, startNode);
console.log(`Distances from ${startNode}:`, distances);
