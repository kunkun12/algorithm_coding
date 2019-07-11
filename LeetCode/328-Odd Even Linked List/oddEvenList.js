/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let oddHead = new ListNode(null)
    let evenHead = new ListNode(null)
    let evenNode =evenHead
    let oddNode = oddHead
    let node = head
    let index=0
    while(node){
        if(index%2){
            oddNode.next = node
            oddNode = node
        }else{
            evenNode.next = node
            evenNode = node
        }
        index++
        node = node.next
    }
   
   oddNode.next = null
   evenNode.next = oddHead.next  
    return evenHead.next
};