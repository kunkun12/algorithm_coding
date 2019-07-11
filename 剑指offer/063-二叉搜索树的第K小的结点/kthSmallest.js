function kthSmallest(root,k){
  let count=0
  let res
   function getNode(root){
     if(root==null) return
     if(!res){
      getNode(root.left)
      count++
      if(count===k){
        res= root
      }
      getNode(root.right)
     }
    }
     getNode(root)
  return res.val
}
