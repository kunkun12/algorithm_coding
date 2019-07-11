    /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(root==null) return null
    let stack = [root]
   let tempArary=[]
    while (stack.length) {
       let temp= stack.pop()
        tempArary.push(temp)
        if(temp.right){
            stack.push(temp.right)
        }
        if(temp.left){
            stack.push(temp.left)
        }
    }
    root.left=null
    let pNode =root
    for(let i =1;i<tempArary.length;i++){
        pNode.right=tempArary[i]
         pNode.left=null
        pNode = pNode.right
       
    }
};
