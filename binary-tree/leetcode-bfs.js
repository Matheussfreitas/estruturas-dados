class Solution {
  levelOrder(root) {
    const result = [];
    if (!root) return result;
    
    const queue = [root];

    while (queue) {
      const level = [];

      for (let index = 0; index < queue.length; index++) {
        const node = queue.shift();
        if (node) {
          level.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);        
        }
      }
      if (level)
      result.push(level);
    }
    return result;
  }
}