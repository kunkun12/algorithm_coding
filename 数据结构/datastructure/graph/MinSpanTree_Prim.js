const IndexMinHeap = require('../indexMinHeap.js')

// 更新跟每个节点相连的最短的横切边
class PrimMST {
  constructor(g) {
    this.g=g
    this.visited = Array(g.Vcount).fill(false)
    this.edgeTo = Array(g.Vcount).fill(null) // edgeTo[m] 为指向m节点的 横切边的最小值.随着遍历，如果堆中不存在 则入堆，如果堆中已经存在，且权重值更小 则更新
    this.iMHeap = new IndexMinHeap() // 最小索引堆
    this.mst = []
    this._calcuMst()
  }
  _calcuMst() {
    this._visit(0)
    while(!this.iMHeap.isEmpty ){
      let min = this.iMHeap.extractMinIndex();
      this.mst.push(this.edgeTo[min])
      this._visit(min);
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
  _visit(v) {
      this.visited[v]=true
      let iterator = this.g.iterator(v)
      let item;
      while((item=iterator.next())&&!item.done){
          let edge = item.value;
          let m = edge.other(v)
          if(!this.visited[m]){
              if(!this.edgeTo[m]){
                  this.edgeTo[m]=edge
                  this.iMHeap.insert(m,edge.w)
              }else{
                //如果堆中不存在 则入堆，如果堆中已经存在，且权重值更小 则更新
                if(edge.w<this.edgeTo[m].w){
                  this.edgeTo[m]=edge
                  this.iMHeap.change(m,edge.w)
                }
              }
          }
      }
  }
}










const WeightSparseGraph = require('./WeightSparseGraph')
const graph = new WeightSparseGraph(8, false);
const {readGraph} = require('./ReadGraph')

readGraph('WG1.txt', graph, true).then(() => {
  //console.log(graph)
  let mst = new PrimMST(graph)
  mst.show()
  console.log(mst.minSpanTreeWeight)
})
