const MinHeap = require('../minHeap.js')
const UnionFind = require('../UnionFind.js')
// 依次取出最短的边，只要这些最短的边不构成撑环，则该边属于最小生成树的一条边，找🐩V-1条边即
class KruskalMST {
  constructor(g) {
    let minHeap = new MinHeap() // 这里选择了堆来实现按从小到大的顺序拿到
    let vCount = g.Vcount
    this.mst = []
    for (let i = 0; i < vCount; i++) {
      let iterator = g.iterator(i)
      let item
      while ((item = iterator.next()) && !item.done) {
        let edge = item.value
        if (edge.p1 < edge.p2) {
          minHeap.insert(edge)
        }
      }
    }
    let unionFind = new UnionFind(vCount)
    while ((!minHeap.isEmpty) && (this.mst.length < vCount - 1)) {
      let edge = minHeap.ExtractMin()
      if (!unionFind.isConnected(edge.p1, edge.p2)) {
        this.mst.push(edge)
        unionFind.unionElement(edge.p1, edge.p2)
      }
    }

  }
  get minSpanTreeWeight() {
    return this.mst.reduce((sum, i) => sum + i.w, 0)
  }
  show() {
    this.mst.forEach(e => {
      console.log(e.toString())
    })
  }
  _visit(v) {}
}










const WeightSparseGraph = require('./WeightSparseGraph')
const graph = new WeightSparseGraph(8, false);
const {readGraph} = require('./ReadGraph')

readGraph('WG1.txt', graph, true).then(() => {
  //console.log(graph)
  let mst = new KruskalMST(graph)
  mst.show()
  console.log(mst.minSpanTreeWeight)
})
