/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let pHead1 = new ListNode(-1)
  let pHead2 = new ListNode(-1)
  let p1 = pHead1
  let p2 = pHead2
  let pNode=head
  while(pNode){
      if(pNode.val<x){
          p1.next=pNode
          p1=pNode
      }else{
          p2.next=pNode
          p2=pNode
      }
      pNode=pNode.next
   //   console.log(pNode)
  }
  p1.next = pHead2.next
  p2.next=null
  return pHead1.next
};