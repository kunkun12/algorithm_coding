function convertBST2DBLinkList(pRootOfTree) {
  if (pRootOfTree === null) return;
  let lastNode = null;
  let head;
  function _inOrder(root) {
    if (root == null) return;

    if (root.left) {
      _inOrder(root.left);
    }
    root.left = lastNode;
    if (lastNode) {
      lastNode.right = root;
    } else {
      head = root;
    }
    lastNode = root;
    if (root.right) {
      _inOrder(root.right);
    }
  }

  _inOrder(pRootOfTree);
  return head;
}
