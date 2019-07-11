/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let newHead = null;
  let pNode = head;
  let pnewNode;
  let map = new Map();
  while (pNode) {
    if (newHead === null) {
      newHead = new ListNode(pNode.val);
      pnewNode = newHead;
    } else {
      pnewNode.next = new ListNode(pNode.val);
      pnewNode = pnewNode.next;
    }
    map.set(pNode, pnewNode);
    pNode = pNode.next;
  }
  pNode = head;
  pnewNode = newHead;
  while (pNode) {
    pnewNode.random = map.get(pNode.random)||null;
    pNode = pNode.next;
    pnewNode = pnewNode.next;
  }
  return newHead;
};
