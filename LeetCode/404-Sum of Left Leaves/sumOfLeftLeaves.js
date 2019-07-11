/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(root==null) return 0
    let sum = sumOfLeftLeaves(root.left)+sumOfLeftLeaves(root.right)
    if(root.left&&root.left.left==null&&root.left.right==null){
        sum +=root.left.val
    }
    return sum
};
