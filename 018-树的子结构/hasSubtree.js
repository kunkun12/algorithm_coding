var isSubtree = function(s, t) {
    if(s===null) return false
    if(isSameTree(s,t))  return true
    
    return isSubtree(s.left,t)||isSubtree(s.right,t)
};

function isSameTree(a,b){
    if(a===null && b===null) return true
    if(a===null|| b===null) return false
    
    if(a.val !==b.val) return false
    return isSameTree(a.left,b.left)&& isSameTree(a.right,b.right)
}