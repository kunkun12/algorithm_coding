function binaryTreePaths(root){
    let res =[]
    if(root==null){
        return res
    }
    if(root.left==null&&root.right==null){
        return res.push(root.val+'')
    }
    if(root.left){
        for(let i of binaryTreePaths(root.left)){
            res.push(root.val+"->"+i.val)
        }
    }
    if(root.right){
        for(let i of binaryTreePaths(root.right)){
            res.push(root.val+"->"+i.val)
        }
    }
    return res
}
