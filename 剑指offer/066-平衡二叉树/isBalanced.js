function isBalanced(root){
        if(root==null) return true
        let leftDepth = treeDepth(root.left)
        let rightDepth = treeDepth(roo.right)
        if(Math.abs(leftDepth-rightDepth)>1){
            return false
        }else{
            return isBalanced(root.left)&&isBalanced(root.right)
        }
        
}


function treeDepth(root){
    if(root==null){
        return 0
    }
    return Math.max(maxDepth(root.left),maxDepth(root.right))+1
}