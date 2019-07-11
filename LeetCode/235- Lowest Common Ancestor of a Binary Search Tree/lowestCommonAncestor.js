/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root==p||root==q){
        return root
    }
    if(root.val>Math.max(p.val,q.val)){
        return lowestCommonAncestor(root.left)
    }
    if(root.val<Math.min(p.val,q.val)){
        return lowestCommonAncestor(root.right)
    }
    return root
};