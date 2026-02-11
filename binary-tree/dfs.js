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

  insertRecursive(value, node) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.insertRecursive(value, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.insertRecursive(value, node.right);
      }
    }
  }

  dfs(value) {
    return this.dfsRecursive(value, this.root);
  }

  dfsRecursive(value, node) {
    if (node === null) {
      return false;
    }
    if (value === node.value) {
      return true;
    }
    if (value < node.value) {
      return this.dfsRecursive(value, node.left);
    } else {
      return this.dfsRecursive(value, node.right);
    }
  }
}