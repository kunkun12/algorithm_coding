// 最小生成树
const MinHeap = require('../minHeap')

class LazyPrimMST {
  constructor(g) {
    this.visited = Array(g.Vcount).fill(false)
    this.g = g
    this.mst = []
    this.minHeap = new MinHeap()
    this._calcuMst()
  }
  _calcuMst() {
    this._visit(0)
    while (!this.minHeap.isEmpty) {
      let edge = this.minHeap.ExtractMin(); // 拿出最小的边
      if (this.visited[edge.p1] === this.visited[edge.p2]) continue
      this.mst.push(edge)
      this.visited[edge.p1] ? this._visit(edge.p2) : this._visit(edge.p1)
    }
  }
  get minSpanTreeWeight() {
    return this.mst.reduce((sum, i) => sum + i.w, 0)
  }
  show() {
    this.mst.forEach(e => {
      console.log(e)
    })
  }
  _visit(v) {
    this.visited[v] = true
    // 将和节点v相连接的所有未访问的边放入最小堆中
    let iterator = this.g.iterator(v)
    let item;
    while ((item = iterator.next()) && !item.done) {
      let edge = item.value;
      if (!this.visited[edge.other(v)]) {
        this.minHeap.insert(edge)
      }
    }
  }
}


// 测试



const WeightSparseGraph = require('./WeightSparseGraph')
const graph = new WeightSparseGraph(8, false);
const {readGraph} = require('./ReadGraph')

readGraph('WG1.txt', graph, true).then(() => {
  //console.log(graph)
  let mst = new LazyPrimMST(graph)
  mst.show()
  console.log(mst.minSpanTreeWeight)
})
