/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head ==null) return false
  let fast = head
  let slow = head
  while(fast){
     
      slow = slow.next
      if(fast.next){
          fast = fast.next.next
      }else{
          return false
      }
       if(fast==slow)return true
  }
  return false
};