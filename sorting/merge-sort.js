class Node {
  constructor(value = 0, next = null) {
    this.value = value;
    this.next = next;
  }
}

const node_7 = new Node(7);
const node_1 = new Node(1, node_7);
const node_3 = new Node(3, node_1);
const node_9 = new Node(9, node_3);

function findMiddle(head) {
  let slow = head
  let fast = head.next

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}

function merge(left, right) {
  const head = new Node()
  let tail = head
  
  while (left && right) {
    if (left.value < right.value) {
      tail.next = left
      left = left.next
    } else {
      tail.next = right
      right = right.next
    }
    tail = tail.next
  }

  tail.next = left || right
  return head.next
}

function mergeSort(head) {
  if (!head || !head.next) return head

  const middle = findMiddle(head)
  const right = middle.next
  middle.next = null

  return merge(mergeSort(head), mergeSort(right))
}

console.log(mergeSort(node_9));