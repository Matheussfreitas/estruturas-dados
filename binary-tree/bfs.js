class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.inserRecursive(value, this.root);
    }
  }

  inserRecursive(value, node) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.inserRecursive(value, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.inserRecursive(value, node.right);
      }
    }
  }

  bfs(value) {
    if (this.root === null) {
      return false;
    }
    const queue = [this.root];
    while (queue) {
      const node = queue.shift();
      if (node.value === value) {
        return true;
      }
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return false;
  }
}