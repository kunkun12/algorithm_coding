// 有负权边，但不能有负权环
// 对所有点进行V-1次松弛操作
class BellmanFordShortestPath {
  constructor(g, s) {
    this.s = s
    this.g = g
    this.from = []
    this.hasNegativeCycle = false //是否含有负权环
    let vCount = g.Vcount
    this.distTo = Array(vCount).fill(0)
    this.distTo[s] = 0
    this.from[s] = {
      p1: s,
      p2: s,
      w: 0
    }
    let distTo = this.distTo
    let from = this.from
    // 最短路径 最多可能包含vCount-1条边，每进行一次松弛操作可能增加一条边，对每条边最多进行N-1次松弛操作就能找到
    // 起点到其余每个点的最短路径
    for (var i = 0; i < vCount - 1; i++) {
      for (var j = 0; j < vCount; j++) {
        let iterator = g.iterator(j)
        let item
        while ((item = iterator.next()) && !item.done) {
          let edge = item.value
          let start = edge.p1
          let end = edge.p2
          if (from[start] && (!from[end] || distTo[end] > distTo[start] + edge.w)) {
            from[end] = edge
            distTo[end] = distTo[start] + edge.w
          }
        }

      }
    }
    // 如果进行第N次松弛操作 还能找到新的最短路径 说明 有负权回路,不存在最短路径
    for (var j = 0; j < vCount; j++) {
      let iterator = g.iterator(j)
      let item
      while ((item = iterator.next()) && !item.done) {
        let edge = item.value
        let start = edge.p1
        let end = edge.p2
        if (from[start] && (!from[end] || distTo[end] > distTo[start] + edge.w)) {
          this.hasNegativeCycle = false //是否含有负权环
        }
      }

    }

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
  _showPath(paths) {
    let s = this.s
    while (paths.length) {
      s += '->' + paths.pop().p2
    }
    console.log(s)
  }

}


const WeightSparseGraph = require('./WeightSparseGraph')
const graph = new WeightSparseGraph(5, true);
const {readGraph} = require('./ReadGraph')

readGraph('testG1.txt', graph, true).then(() => {
  //console.log(graph)
  let shortPath = new BellmanFordShortestPath(graph, 0)
  for (let i = 1; i <= 4; i++) {
    shortPath.shortestPath(i)
  }
//console.log(mst.shortestPathTo(4))
})
