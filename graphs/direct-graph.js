function hasOutGoing(paths) {
  const outGoing = new Set();

  for (const path in paths) {
    outGoing.add(paths[path][0]);
  }

  for (const path in paths) {
    if (!outGoing.has(paths[path][1])) {
      console.log(paths[path][1]);
      return paths[path][1];
    }
  }
}

const paths = [
  ['Londres', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];

hasOutGoing(paths);