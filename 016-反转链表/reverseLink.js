

function reverseLink(root){
  let preNode= null;
  let curNode = root
  let nextNode = null
  if(root==null) return null
  while(curNode&&curNode.next){
      nextNode = curNode.next;
      curNode.next = preNode
      preNode = curNode
      curNode = nextNode
  }
  return curNode
}

function reverseLink2(root){
    let preNode = null
    let curNode = root
    let nextNode = null

    while(curNode!=null){
        nextNode = curNode.next
        curNode.next=preNode
        preNode = curNode
        curNode = nextNode
    }
    return preNode
}


 // 1->2-3->4->5
function reverseLink3(root){
    if(root==null){
        return null
    }
   let newNode = root 
   let pNode = root.next
    newNode.next= null
    let nextNode = null
    while(pNode){
        nextNode = pNode.next
        pNode.next=newNode
        newNode=pNode
        pNode = nextNode
    }
    return newNode
}
