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
var maxPathSum = function(root) {
    let res = Number.MIN_SAFE_INTEGER
    function helper(node){
        if(!node)return 0
        let left = Math.max(helper(node.left),0)
        let right = Math.max(helper(node.right),0)
        res = Math.max(res,left+right+node.val)
        return Math.max(left,right)+node.val
    }
      helper(root)
      return res
};

