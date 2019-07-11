

var reverseList = function(head) {
    let curNode = head
    let preNode = null
    let nextNode = null
    while(curNode){
        nextNode = curNode.next
        curNode.next = preNode
        preNode = curNode
        curNode = nextNode
    }
     return preNode
 };



 // 1->2-3->4->5
function reverseList2(head) {
    if(head==null){
        return null
    }
    let newNode = head
    let nextNode = head.next
        newNode.next=null
    let pNode
    while(nextNode){
        pNode = nextNode
        nextNode = nextNode.next
        pNode.next = newNode
        newNode = pNode
    }
    
    return newNode
};