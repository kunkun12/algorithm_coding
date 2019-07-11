var {readGraph} = require('./ReadGraph')
class Edge {
  constructor(m, n, weight) {
    this.m = m;
    this.n = n ;
    this.weight = weight
  }
  get p1() {
    return this.m;
  }
  get p2() {
    return this.n
  }
  get w() {
    return this.weight
  }
  other(x) {
    return x === this.m ? this.n : this.m
  }
  toString() {
    return `${this.m}-${this.n}: ${this.w}`
  }
  to2String(a) {
    let other = this.other(a)
    let weight = this.weight
    return `(to:${other},w:${weight})`
  }
  valueOf() {
    return this.weight
  }
}
// 邻接表
class WeightSparseGraph {
  constructor(n, isDrected) {
    this.g = []
    this._vcount = n;
    this._ecount = 0
    this.isDrected = isDrected
    for (let i = 0; i < n; i++) {
      this.g.push([])
    }
  }
  get Vcount() {
    return this._vcount
  }
  get Ecount() {
    return this._ecount
  }
  addEge(a, b, w) {
    if (!this.hasEdge(a, b)) {
      this.g[a].push(new Edge(a, b, w))
      this._ecount++
      if (a !== b && !this.isDrected) {
        this.g[b].push(new Edge(b, a, w))
        this._ecount++
      }
    }
  }
  hasEdge(a, b) {
    for (var i = 0; i < this.g[a].length; i++) {
      if (this.g[a][i].other(a) === b)
        return true
    }
    return false
  }
  // 节点相邻的元素
  iterator(j) {
    let i = 0;
    return {
      next: () => {
        if (i < this.g[j].length) {
          return {
            value: this.g[j][i++]
          }
        } else {
          i = null;
          return {
            done: true
          }
        }
      }
    }
  }
  show() {
    for (var i = 0; i < this._vcount; i++) {
      let s = i + '\t'
      for (let j = 0; j < this.g[i].length; j++) {
        s += this.g[i][j].to2String(i) + '\t'
      }
      console.log(s)
    }
  }
}

module.exports = WeightSparseGraph

// var graph = new WeightSparseGraph(8,false)

// readGraph('WG1.txt',graph,true).then(()=>(graph.show()))
// module.exports = WeightSparseGraph
