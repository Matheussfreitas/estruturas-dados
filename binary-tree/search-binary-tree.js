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

  search(value) {
    return this.searchRecursive(value, this.root);
  }

  searchRecursive(value, node) {
    if (node === null) {
      return false;
    }
    if (value === node.value) {
      return true;
    }
    if (value < node.value) {
      return this.searchRecursive(value, node.left);
    } else {
      return this.searchRecursive(value, node.right);
    }
  }

  preorderTraversal(node, result) {
    result = []
    this.preorderRecursive(node, result)
    return result
  }

  preorderRecursive(node, result) {
    if (node) {
      result.push(node.value);
      this.preorderRecursive(node.left, result);
      this.preorderRecursive(node.right, result);
    }
  }

  inorderTraversal(node, result) {
    result = []
    this.inorderRecursive(node, result)
    return result
  }

  inorderRecursive(node, result) {
    if (node) {
      this.inorderRecursive(node.left, result);
      result.push(node.value);
      this.inorderRecursive(node.right, result);
    }
  }

  postorderTraversal(node, result) {
    result = []
    this.postorderRecursive(node, result)
    return result
  }

  postorderRecursive(node, result) {
    if (node) {
      this.postorderRecursive(node.left, result);
      this.postorderRecursive(node.right, result);
      result.push(node.value);
    }
  }
}