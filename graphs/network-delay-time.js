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

function networkDelayTime(times, n, k) {
  const table = {};

  for (const t of times) {
    const from = t[0];
    const to = t[1];
    const weight = t[2];

    if (!table[from]) {
      table[from] = { [to]: weight };
    } else {
      table[from][to] = weight;
    }
  }

  const distances = { [k]: 0 };
  const minHeap = new MinHeap();
  minHeap.push([0, k]);

  while (minHeap.size > 0) {
    const [dist, node] = minHeap.pop();

    const row = table[node];
    if (!row) continue;

    for (const key in row) {
      const weight = row[key];
      const tableDist = distances[key] ?? Infinity;

      if (dist + weight < tableDist) {
        distances[key] = dist + weight;
        minHeap.push([dist + weight, key]);
      }
    }
  }

  if (Object.keys(distances).length < n) {
    return -1;
  }

  let maxDist = -1;
  for (const key in distances) {
    maxDist = Math.max(maxDist, distances[key]);
  }

  if (maxDist === 0) return -1;
  return maxDist;
}
