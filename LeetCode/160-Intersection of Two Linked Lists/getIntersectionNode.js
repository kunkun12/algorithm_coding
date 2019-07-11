/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA)
    let lenB = getLength(headB)
    let longHead,shortHead;
    if(lenA>lenB){
        longHead = headA
        shortHead = headB
    }else{
        longHead = headB
        shortHead = headA
    }
    let n = Math.abs(lenA-lenB)
    let node =longHead
    let shortNode = shortHead
    let count = 0
    while(node){
        if(count<n){
            count++
        }else{
            if(node===shortNode){
                return node
            }
            shortNode = shortNode.next
        }
        node=node.next
    }
    return null
};

function getLength(node){
    let len = 0
    while(node){
        len++
        node = node.next
    }
    return len
}