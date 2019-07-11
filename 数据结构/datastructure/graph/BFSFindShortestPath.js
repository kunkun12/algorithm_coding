var SparseGraph = require('./SparseGraph')
var {readGraph} = require('./ReadGraph')
var Queue = require('../Queue')
var Stack = require('../Stack')


//广度优先遍历 层序遍历
class BFS {
  constructor(g, s) {
    this.g = g;
    this.s = s;
    let vcount = g.Vcount
    this.from = Array(vcount).fill(-1)
    this.visited = Array(vcount).fill(false)
    this.orders = Array(vcount).fill(-1)

    this.bfs(s)
  }
  bfs(s) {
    let queue = new Queue(10)
    queue.enQueue(s)
    this.visited[s] = true
    this.orders[s] = 0
    while (!queue.isEmpty) {
      let current = queue.deQueue()
      console.log(current)
      let iterator = this.g.iterator(current)
      let item = iterator.next()

      while (!item.done) {
        if (!this.visited[item.value]) {
          queue.enQueue(item.value)
          this.from[item.value] = current
          this.visited[item.value] = true
          this.orders[item.value] = this.orders[current] + 1
        }
        item = iterator.next()
      //  console.log(item)
      }
    }
  }
  hasPath(w) {
    this.visited[w] == true
  }
  path(w) {
    var s1 = new Stack()
    let i = w;

    while (i != -1) {
      s1.push(i)
      i = this.from[i]
    }
    //  console.log(s1)
    return s1
  }
  shortestPath(w) {
    let stack = this.path(w)
    let s = ''
    while (!stack.isEmpty) {
      s += '->' + stack.pop()
    }
    console.log(s)
  }
}


//测试代码
var g2 = new SparseGraph(7, false)
readGraph('G2.txt', g2, false).then(() => new BFS(g2, 0).shortestPath(6)).catch((e) => {
  console.log(e)
})
