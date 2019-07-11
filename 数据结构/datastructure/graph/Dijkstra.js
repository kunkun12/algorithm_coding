const IndexMinHeap = require('../indexMinHeap.js')
// 带权图 单源最短途径,不能含有负权边,s点到任意点的最短路径

class DikstraShortestPath {
  constructor(g, s) {
    let indexMinHeap = new IndexMinHeap()
    let vCount = g.Vcount
    this.g = g
    this.s = s
    this.from = [] //存储路径
    this.distTo = Array(vCount).fill(0) // distTo[v] 为s到v的最短距离
    let visited = Array(vCount).fill(false) //是否被遍历过

    this.distTo[s] = 0
    visited[s] = true
    this.from[s] = {
      p1: s,
      p2: s,
      w: 0
    } //起点到起点
    indexMinHeap.insert(s, 0)
    // 广度优先遍历
    while (!indexMinHeap.isEmpty) {
      let v = indexMinHeap.extractMinIndex()
      visited[v] = true
      let iterator = g.iterator(v)
      let item
      while ((item = iterator.next()) && !item.done) {
        let edge = item.value
        let p2 = edge.other(v)
        if (!visited[p2]) {
          //还没有访问过p2 或者访问过 但是通过v到p2距离比直接到p2更短
          if (!this.distTo[p2] || this.distTo[v] + edge.w < this.distTo[p2]) {
            this.distTo[p2] = this.distTo[v] + edge.w
            this.from[p2] = edge
            if (indexMinHeap.contain(p2)) {
              indexMinHeap.change(p2, edge.w)
            } else {
              indexMinHeap.insert(p2, edge.w)
            }
          }
        }
      }
    }

  }
  shortestPathTo(v) {
    return this.distTo[v]
  }

  hasPathTo(v) {
    return this.marked[v]
  }
  shortestPath(v) {
    let paths = []
    let from = this.from
    while (from[v].p1 != this.s) {
      paths.push(from[v])
      v = from[v].p1
    }
    paths.push(this.from[v])
    this._showPath(paths)
  }
  _showPath(paths){
    let s = this.s
    while(paths.length){
      s+='->'+paths.pop().p2
    }
    console.log(s)
  }
}

const WeightSparseGraph = require('./WeightSparseGraph')
const graph = new WeightSparseGraph(5, true);
const {readGraph} = require('./ReadGraph')

readGraph('testG1.txt', graph, true).then(() => {
  //console.log(graph)
  let  shortPath= new DikstraShortestPath(graph, 0)
  for(let i =1;i<=4;i++){
   shortPath.shortestPath(i) 
  }
//console.log(mst.shortestPathTo(4))
})
