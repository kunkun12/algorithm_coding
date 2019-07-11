var SparseGraph = require('./SparseGraph');
var {readGraph} = require('./ReadGraph');
var Stack = require('../Stack')




class Path {
  constructor(g, s) {
    this.visited = Array(g.Vcount).fill(false);
    this.from = Array(g.Vcount).fill(-1);
    this.s = s
    this.g = g
    this.dfs(s)
  }
  dfs(i) {
    let iterator = this.g.iterator(i);
    let item;
    this.visited[i] = true
    while ((item = iterator.next()) && (!item.done)) {
      // console.log(item)
      let k = item.value
      if (!this.visited[k]) {
        this.from[k] = i
        this.dfs(k)
      }
    }

  }
  hasPath(w) {
    this.visited[w] == true
  }
  path(w) {
    var s1 = new Stack()
    let i = w;
    console.log(this.from)
    while (i != -1) {
      s1.push(i)

      i = this.from[i]
    }
    console.log(s1)
    return s1
  }
  showPath(w) {

    let stack = this.path(w)
    let s = ''
    while (!stack.isEmpty) {
      s += '->' + stack.pop()
    }
    console.log(s)
  }
}




// 测试代码
var g2 = new SparseGraph(7, false)
readGraph('G2.txt', g2, false).then(() => {
  (new Path(g2, 0)).showPath(6)
})
