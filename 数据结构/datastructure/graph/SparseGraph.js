// 邻接表
class SparseGraph {
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
  addEge(a, b) {
    if (!this.hasEdge(a, b)) {
      this.g[a].push(b)
      this._ecount++
      if (a !== b && !this.isDrected) {
        this.g[b].push(a)
        this._ecount++
      }
    }
  }
  hasEdge(a, b) {
    for (var i = 0; i < this.g[a].length; i++) {
      if (this.g[a][i] === b)
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
        s += this.g[i][j] + '\t'
      }
      console.log(s)
    }
  }
}

// function Random(start,end){
//       return start+Math.floor(Math.random()*(end-start))
// }


// let graph = new SparseGraph(20,false)

// for(let i =0;i<100;i++){
//     let a=Random(0,20);
//     let b=Random(0,20)
//     graph.addEge(a,b)
// }

// for(var j=0;j<20;j++){
//     let iterater = graph.iterator(j)
//     let item = iterater.next()
//     let s=j+'  :  '
//     while(!item.done){
//         s+=item.value+' '
//         item= iterater.next()
//     }
//     console.log(s)
//     console.log('\n')
// }

module.exports = SparseGraph
