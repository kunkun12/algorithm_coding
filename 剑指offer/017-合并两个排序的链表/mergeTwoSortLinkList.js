
function mergeTwoLists(node1, node2) {
    if(node1==null){
      return node2
  }
  if(node2===null){
      return node1
  }
  let phead 
  if(node1.val>node2.val){
      phead = node2
      phead.next = mergeTwoLists(node1,node2.next)
  }else{
      phead=node1
      phead.next = mergeTwoLists(node1.next,node2)
  }
  return phead
};