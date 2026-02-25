function canFinish(numCourses, prerequisites) {
  const graph = {};
  for (let i = 0; i < numCourses; i += 1) {
    graph[i] = [];
  }

  for (const [a, b] of prerequisites) {
    graph[b].push(a);
  }

  const state = new Array(numCourses).fill(0);

  function hasCycle(v) {
    if (state[v] === 1) return true;
    if (state[v] === 2) return false;

    state[v] = 1;
    for (const neighbor of graph[v]) {
      if (hasCycle(neighbor)) return true;
    }
    state[v] = 2;
    return false;
  }

  for (let i = 0; i < numCourses; i += 1) {
    if (hasCycle(i)) return false;
  }

  return true;
}
