

function printLinkList(p){
    if(p==null) return
    printLinkList(p.next)
    console.log(p.value)
}




function printLinkList2(p){
  //先入栈
  let stack = []
  //带头链表
    while(p){
      stack.unshift(p.value)
      p=p.next
    }
}