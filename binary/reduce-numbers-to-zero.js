function reduceNumberToZero(number) {
  let steps = 0;
  while (number > 0) {
    if (number % 2) {
      number -= 1;
    }
    else {
      number /= 2;
    }
    steps++;
  }
  return steps;
}

function reduceNumberToZeroBinary(number) {
  let steps = 0;
  while (number > 0) {
    if (number & 1) {
      number -= 1;
    }
    else {
      number >>= 1;
    }
    steps++;
  }
  return steps;
}