/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    if (root == null && (root.left == null && root.right == null)) return true
    if (root.left) {
        let pNode = root.left
        let leftMax
        while (pNode) {
            leftMax = pNode.val
            pNode = pNode.right
            if (pNode && pNode.val <= leftMax) return false
        }
        if (root.val <= leftMax) return false
    }
    if (root.right) {
        let pNode = root.right
        let rightMin
        while (pNode) {
            rightMin = pNode.val
            pNode = pNode.left
            if (pNode && pNode.val >= rightMin) return false
        }
        if (root.val >= rightMin) return false
    }
    return isValidBST(root.left) && isValidBST(root.right)
};