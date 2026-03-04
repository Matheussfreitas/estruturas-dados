class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      throw new Error("Stack is empty");
    }
    const poppedValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return poppedValue;
  }

  peek() {
    if (this.size === 0) {
      throw new Error("Stack is empty");
    }
    return this.top.value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());  // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.size);   // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.pop()); // Output: Stack is empty