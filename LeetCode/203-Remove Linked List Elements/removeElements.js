 var removeElements = function(head, val) {
    let curNode =head 
    while(curNode){
        if(curNode.val==val){
            curNode=curNode.next
        }else{
            head=curNode
            break
        }
    }
    if(curNode===null) return null
    while(curNode.next){
        if(curNode.next.val ===val){
            curNode.next = curNode.next.next
        }else{
            curNode = curNode.next
        }
    }
    return head
};