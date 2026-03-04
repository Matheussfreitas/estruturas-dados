class Stack {
  constructor(max_length = 100) {
    this.itens = new Array(max_length);
    this.max_length = max_length;
    this.pointer = 0;
  }

  push(value) {
    if (this.pointer >= this.max_length) {
      throw new Error("Stack is full");
    }
    this.itens[this.pointer] = value;
    this.pointer++;
  }

  pop() {
    if (this.itens.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.itens.pop();
  }

  peek() {
    if (this.itens.length === 0) {
      throw new Error("Stack is empty");
    }
    return this.itens[this.itens.length - 1];
  }

  size() {
    return this.itens.length;
  }
}