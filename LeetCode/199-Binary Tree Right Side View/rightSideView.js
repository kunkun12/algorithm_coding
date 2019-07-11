/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (root === null) return [];
  let queue = [root];
  let res = [];
  while (queue.length) {
    let count = queue.length;
    while (count) {
      let top = queue.pop();
      if (top.left) {
        queue.unshift(top.left);
      }
      if (top.right) {
        queue.unshift(top.right);
      }
      count--;
      if (count === 0) {
        res.push(top.val);
      }
    }
  }
  return res;
};
