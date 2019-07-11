var isSymmetric = function(root) {
    if(root==null) return true
     return isSymmetricHelper(root.left,root.right)
 };
 
 function isSymmetricHelper(left,right){
     if(left ==null && right ==null) return true
     if(left ==null) return false
     if(right==null) return false
     
     if(left.val!=right.val) return false
     
     return isSymmetricHelper(left.right,right.left)&&isSymmetricHelper(left.left,right.right)
 }