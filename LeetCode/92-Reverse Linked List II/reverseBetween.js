/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummyNode = new ListNode(-1)
  let pre = dummyNode
  dummyNode.next =head
  let i=1
  while(i<m){
      pre=pre.next;
      i++
  }
  i=0
  let pNode = pre.next
  while(i<n-m){
      let t= pNode.next
      pNode.next = t.next
      t.next = pre.next
      pre.next=t
      i++
  }
  return dummyNode.next
};