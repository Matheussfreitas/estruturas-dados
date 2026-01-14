function bubbleSort(arr) {
  let size = arr.length;

  for (item in arr) {
    let sorted = true;
    console.log(arr);

    for (let i = 0; i < size - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }

    if (sorted) {
      return;
    }
  }
}

const arr = [5,4,3,2,1];
const sortedArr = [1,2,3,4,5];

bubbleSort(sortedArr);
