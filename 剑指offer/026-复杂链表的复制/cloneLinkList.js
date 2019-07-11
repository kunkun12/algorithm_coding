// 使用Map 来存储新旧节点的对应
function RandomListNode(x) {
  this.label = x;
  this.next = null;
  this.random = null;
}
function cloneLinkList(pHead) {
  let cloneRandomMap = new Map() //使用map 来完成 新旧的对应，也可以使用数组，通过编号来对应
  if (pHead == null) return null
  let pNode = pHead
  let newHead = null
  let cloneNode = null
  let preNewNode = null
  while (pNode) {
    cloneNode = new RandomListNode(pNode.label)
    if (newHead == null) {
      newHead = cloneNode
    } else {
      preNewNode.next = cloneNode
    }
    preNewNode = cloneNode
    cloneRandomMap.set(pNode, cloneNode)
    pNode = pNode.next
  }
  let pNode2 = pHead
  let cloneNode2 = newHead
  while (pNode2) {
    let randomNode = pNode2.random
    cloneNode2.random = cloneRandomMap.get(randomNode)
    pNode2 = pNode2.next
    cloneNode2 = cloneNode2.next
  }
  return newHead

}





