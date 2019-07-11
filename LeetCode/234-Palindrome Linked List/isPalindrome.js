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
var isPalindrome = function(head) {
    if(head===null||head.next===null) return true
    let fast=head
    let slow = head
    while(fast.next&&fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }
 
    slow = reverserList(slow.next)
    while(slow){
        if(head.val!==slow.val){
            return false
        }
        head = head.next
        slow = slow.next
    }
   return true
};
function reverserList(head){
    let pre = null
    let next = null
    let node = head
    while(node){
        next = node.next
        node.next = pre
        pre=node
        node =next
    }
    return pre
}