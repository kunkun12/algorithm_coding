function lowestCommonAncestor(root,p,q){
    if(root==null||p===root||root===q){
        return root
    }
    let left = lowestCommonAncestor(root.left,p,q)
    let right = lowestCommonAncestor(root.right,p,q)
    if(left&&right){
        return root
    }
    if(left){
        return left
    }
    return right
}