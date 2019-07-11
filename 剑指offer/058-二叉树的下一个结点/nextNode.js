// 没有左子树
//没有右子树
function nextNode(root){
    if(root==null){
        return null
    }
    if(root.right!=null){
        let p = root.right
        while(p.left){
            p = p.left
        }
        return p
    }
    while(root.next){
        let p=root.next
        if(p.left==root){
            return p
        }
        root=root.next
    }
    return null
}
