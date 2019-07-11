class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkList {
  constructor() {
    this.head = new Node(null, null)
    this.tail = this.head
    this._length = 0
  }
  getNode(i) {
    if (i = -1) {
      return this.head
    }
    let count = 0
    let p = this.head.next
    while (p && count < i) {
      p = p.next
    }
    return p
  }
  isEmptry() {
    return this._length === 0
  }
  get length() {
    return this._length
  }
  append(data) {
    this.tail.next = new Node(data, null)
    this.tail = this.tail.next
    this._length++
  }
  insert(index, data) {
    if (index > this.count + 1) {
      throw (new Error('插入的索引不合法'))
    }
    let p = this.head // 插入节点的前驱
    let i = 0
    while (p && i < index) {
        p = p.next
        i++
    }
   let  node = new Node(data, p.next)
    p.next = node
    if (!node.next) {
      this.tail = node
    }
    this._length++
  }
  delete(data) {
    let p = this.head
    while (p && p.next.data !== data) {
      p = p.next
    }
    if (p === null) {
      throw (new Error('删除的元素不存在'))
    }
    let q = p.next
    if (q === this.tail) {
      this.tail = p
    }
    p.next = q.next
    this._length--
  }
  getValue(index) {
    let p = this.head
    let i = 1
    while (i++ < index) {
      p = p.next
    }
    return p.data
  }
  getPos(data) {
    let p = this.head
    let i = 1
    while (i <= index && p.data !== data) {
      p = p.next
      i++
    }
    return i

  }
    print(){
        let p = this.head
        let s=''
        while(p=p.next){
            s+=p.data+'->'
        }
        console.log(s)
    }
}



// 测试

let linkList = new LinkList()
linkList.append(10)
linkList.append(9)
linkList.append(8)
linkList.append(7)
linkList.append(6)
linkList.append(5)
linkList.append(4)
linkList.append(3)
linkList.append(2)
linkList.append(1)
linkList.append(12)
linkList.append(11)

linkList.print()

linkList.delete(12)
linkList.print()
linkList.insert(10,555)
linkList.print()
