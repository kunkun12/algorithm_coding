

function mirrorBinaryTree(tree){
    if(tree==null){return}
    let temp = tree.left
    tree.left = tree.right
    tree.right = temp
    mirrorBinaryTree(tree.right)
    mirrorBinaryTree(tree.left)
}