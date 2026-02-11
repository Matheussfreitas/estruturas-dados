class Solution {
  hasPathSum(root, targetSum) {
    if (!root) {
      return false;
    }

    if (!root.right && !root.left && targetSum === root.val) {
      return true;
    }

    return (
      this.hasPathSum(root.left, targetSum - root.val) ||
      this.hasPathSum(root.right, targetSum - root.val)
    );
  }
}
