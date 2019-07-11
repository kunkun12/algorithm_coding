function pathSum(root,sum){
    if(root==null) return []
    let res = []
    let path = []
    function getSum(array){
        return array.reduce((sum,i)=>sum+i,0)
    }
   function _pathSum(root,total){
        path.push(root.val)
     if(root.left==null&&root.right==null){
         if(getSum(path)===total){
             res.push([...path])
         }
     }else{
        if(root.left){
            _pathSum(root.left,total)
        }
        if(root.right){
            _pathSum(root.right,total)
        }
     }
     path.pop()
   }
_pathSum(root,sum)
return res
}