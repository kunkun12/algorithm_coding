
  function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }


function buildTree(preOrder,inOrder){
    if(preOrder.length==0){
      return null
    }
    let rootValue =preOrder[0]
    let root = new TreeNode(preOrder[0])
    let rootIndex = inOrder.indexOf(rootValue)
    let preLeft=[]
    let inLeft = []
    let preRight = []
    let inRight = []

    for(let i = 0;i<preOrder.length;i++){
      if(i<rootIndex){
            preLeft[i]=preOrder[i+1]
            inLeft[i] = inOrder[i]
      }else{
            preRight[i-rootIndex-1] =  preOrder[i]
            inRight[i-rootIndex-1] = inOrder[i]
      }
    }

    root.left = buildTree(preLeft,inLeft)
    root.right = buildTree(preRight,inRight)
    return root
}