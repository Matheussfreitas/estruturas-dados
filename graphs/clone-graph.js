class Node {
  constructor(val, neighbors) {
    this.val = val
    this.neighbors = neighbors
  }
}

function cloneGraph(node) {
  if (!node) return null;

  const queue = [node];

  const clones = new Map();
  clones.set(node, new Node(node.val, []));

  while (queue.length > 0) {
    const current = queue.shift();
    const currentClone = clones.get(current);

    for (const neighbor of current.neighbors) {
      if (!clones.has(neighbor)) {
        clones.set(neighbor, new Node(neighbor.val, []));
        queue.push(neighbor);
      }
      currentClone.neighbors.push(clones.get(neighbor));
    }
  }
  return clones.get(node);
}