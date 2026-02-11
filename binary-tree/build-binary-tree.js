const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

function buildTree(inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  const root = new Node(postorder.pop());
  const rootIndex = inorder.indexOf(root.value);

  root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIndex), postorder);

  return root;
}