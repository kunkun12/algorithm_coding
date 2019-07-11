// 构造哈夫曼树的目的是为了完成哈夫曼编码，哈夫曼编码是一种变长、极少多余编码方案。
// 相对于等长编码，将文件中每个字符转换为固定个数的二进制位，变长编码根据字符使用频率的高低
//无损压缩 用于编码 节省存储空间
// 带权路径长度(权重*路径长度)最短的二叉树,权值越大的叶子节点离根节点越近,最优二叉树
// 每次选取最小的两个叶子合并 产生新的书，最后到只有一棵树，需要合并n-1次，一共有2m-1个节点
const IndexMinHeap = require('./indexMinHeap.js')


class Node {
  constructor(left, right, ch, weight) {
    this.left = left
    this.right = right
    this.ch = ch
    this.weight = weight
  }
  valueOf() {
    return this.weight
  }
}
class HuffmanTree {
  constructor(s) {
    this.s = s
    this.root = null
    this.indexMinHeap = new IndexMinHeap()
    this.codeMap={}
    this._cacluWeight(s)
    while (!this.indexMinHeap.isEmpty) {
      let node = this.indexMinHeap.ExtractMin()
      if (this.root === null) {
        this.root = node
      } else {
        if (this.root > node) {
          this.root = new Node(node, this.root, null, this.root.weight + node.weight)
        } else {
          this.root = new Node(this.root, node, null, this.root.weight + node.weight)
        }
      }
    }
    this._cacluCharHuffmanCode()
  }

  _cacluCharHuffmanCode(){
      this._dfs(this.root,[])
  }
  encode(){
    let len = this.s.length
    let i=0
    let result=''
    while(i<len){
      let ch= this.s[i]
      result+=this.codeMap[ch]
      i++
    }
    return result
  }
  decode(code){
    let s=''
    let i=0
    let node = this.root
    while(i<code.length){
      if(code[i]==0){
         node = node.left 
      }else{
        node= node.right
      }
      if(!node.left){
        s+=node.ch
        node = this.root // 从头开始
      }
      i++
    }
    return s
  }
  _dfs(node,codeArray){
    if(node){
      if(node.left){
        codeArray.push(0)
        this._dfs(node.left,codeArray)
        codeArray.pop()
        codeArray.push(1)
        this._dfs(node.right,codeArray)
        codeArray.pop()
      }else{
        let ch = node.ch
        this.codeMap[ch]=codeArray.join('')
      }
    }
  }
  // 频率统计
  _cacluWeight(s) {
    let indexMinHeap = this.indexMinHeap
    let len = s.length;
    while (len) {
      let charCode = s.charCodeAt(--len)
      let item = indexMinHeap.getItem(charCode)
      if (item) {
        item.weight++
        indexMinHeap.change(charCode, item)
      } else {
        indexMinHeap.insert(charCode, new Node(null, null, s[len], 1))
      }
    }
  }
}


// test
let s = '我爱这个世界'
let hftree = new HuffmanTree(s)
let hfcode =  hftree.encode()
console.log('输入字符串:', s)
console.log('编码后的结果为：')
console.log(hfcode)
let result = hftree.decode(hfcode)
console.log('解码后的结果为')
console.log(result)
