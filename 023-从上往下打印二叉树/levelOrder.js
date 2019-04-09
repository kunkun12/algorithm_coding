function levelOrder(root) {
  if (root == null) return [];
  let res = [[]];
  let queue = [root];
  let level = 0;
  let currentLevelCount = 1;
  let childSize = 0;
  while (queue.length) {
    let node = queue.pop();
    currentLevelCount--;
    if (!res[level]) {
      res[level] = [];
    }
    res[level].push(node.val);
    if (node.left) {
      queue.unshift(node.left);
      childSize++;
    }
    if (node.right) {
      queue.unshift(node.right);
      childSize++;
    }
    if (currentLevelCount == 0) {
      currentLevelCount = childSize;
      childSize = 0;
      level++;
    }
  }
  return res;
}
