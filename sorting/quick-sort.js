function quickSortRecursive(arr, left, right) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSortRecursive(arr, left, pivotIndex - 1);
    quickSortRecursive(arr, pivotIndex + 1, right);
  }
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;
  
  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

const arr = [0, 3, 6, 7, 8, 4, 2, 1]

quickSortRecursive(arr, 0, arr.length - 1);