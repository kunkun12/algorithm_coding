function pathSum(root, sum) {
    if(root==null)return 0
   
   let count =findPath(root,sum)
    count += pathSum(root.left,sum)
    count += pathSum(root.right,sum)
   return count 
};

function findPath(root,sum){
   if(root==null)return 0
   let res = 0
   if(root.val==sum){
       res++
   }
   res+=findPath(root.left,sum-root.val)
   res+=findPath(root.right,sum-root.val)
   return res
}