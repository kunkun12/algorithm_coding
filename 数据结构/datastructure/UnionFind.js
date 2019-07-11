// 数组的index是节点的整数表示，而相应的值就是该节点的组号，两个元素组号相同则为属于同一个集合
class UnionFind {
  constructor(n) {
    this.id = [];
    this.n = n
    while (n--) {
      id[n] = n
    }
  }
  find(id) {
    return this.id[id]
  }
  isConnected(id1, id2) {
    return this.find(id1) == this.find(id2)
  }
  unionElement(p, q) {
    let pid = this.find(p)
    let qid = this.find(q)
    if (pid === qid) return
    // 对另一个结合每个元素进行重写
    for (let i = 0; i < this.n; i++) {
      if (this.id[i] = pid) {
        this.id[i] = qid
      }
    }
  }
}


//Quick-Union
//上述查找快，union需要对集合所有元素修改， parents 指向父节点,索引为元素编号，同一个集合有共同的祖先节点,parent[root]=root，这样union不用对每一个元素赋值了，只需要将祖先节点之间进行union
class UnionFind2 {
  constructor(n) {
    this.ids = []
    this.parents = []
    for (var i = 0; i < n; i++) {
      this.parents[i] = i
    }
  }
  find(i) {
    let parent = this.parents[i]
    while (i != parent) {
      i = parent
      parent = this.parents[i]
    }
    return i
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q)
  }
  unionElement(p, q) {
    let pRoot = this.find(p)
    let qRoot = this.find(q)
    if (pRoot !== qRoot) {
      parents[pRoot] = qRoot
    }
  }
}


// 基于size的优化
// parents 指向父节点,索引为元素编号
// size 来记录每个集合的元素个数 ,
// size小的树作为子树和size大的树进行合并

class UnionFind3 {
  constructor(n) {
    this.ids = []
    this.parents = []
    this.sizes = [] // sizes[i]存储元素的个数
    for (var i = 0; i < n; i++) {
      this.parents[i] = i
      this.sizes[i] = 1
    }
  }
  find(i) {
    let parent = this.parents[i]
    while (i != parent) {
      i = parent
      parent = this.parents[i]
    }
    return i
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q)
  }
  unionElement(p, q) {
    let pRoot = this.find(p)
    let qRoot = this.find(q)
    if (pRoot !== qRoot) {
      if (this.sizes[pRoot] > this.sizes[qRoot]) {
        this.parents[qRoot] = pRoot
        this.sizes[pRoot] = this.sizes[pRoot] + this.sizes[qRoot]
      } else {
        this.parents[pRoot] = qRoot
        this.sizes[qRoot] = this.sizes[qRoot] + this.sizes[pRoot]
      }
    }
  }
}


// 基于rank的优化
// parents 指向父节点,索引为元素编号
// rank 记录集合的层数
// 将层数少的指向层数多的

class UnionFind4 {
  constructor(n) {
    this.ids = []
    this.parents = []
    this.ranks = [] // sizes[i]存储元素的个数
    for (var i = 0; i < n; i++) {
      this.parents[i] = i
      this.ranks[i] = 1
    }
  }
  find(i) {
    let parent = this.parents[i]
    while (i != parent) {
      i = parent
      parent = this.parents[i]
    }
    return i
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q)
  }
  unionElement(p, q) {
    let pRoot = this.find(p)
    let qRoot = this.find(q)
    if (pRoot !== qRoot) {
      if (this.ranks[pRoot] > this.ranks[qRoot]) {
        this.parents[qRoot] = pRoot
      } else if (this.ranks[pRoot] < this.ranks[qRoot]) {
        this.parents[pRoot] = qRoot
      } else {
        this.parents[pRoot] = qRoot
        this.ranks[qRoot]++
      }
    }
  }
}


// 路径压缩 在find的时候进行优化，从低向上如果找不到 则向上提一级，指向父亲的父亲，依次循环
// parents 指向父节点,索引为元素编号
// rank 记录集合的层数

class UnionFind5 {
  constructor(n) {
    this.ids = []
    this.parents = []
    this.ranks = [] // sizes[i]存储元素的个数
    for (var i = 0; i < n; i++) {
      this.parents[i] = i
      this.ranks[i] = 1
    }
  }
  find(i) {
    while (i != this.parents[i]) {
      this.parents[i] = this.parents[parent]
      i = this.parents[i]
    }
    return i
  }
  find2(p) {
    if (p = !this.parents[p]) {
      this.parents[p] = this.find2(this.parents[p])
    }
    return parent[p]
  }
  isConnected(p, q) {
    return this.find(p) === this.find(q)
  }
  unionElement(p, q) {
    let pRoot = this.find(p)
    let qRoot = this.find(q)
    if (pRoot !== qRoot) {
      if (this.ranks[pRoot] > this.ranks[qRoot]) {
        this.parents[qRoot] = pRoot
      } else if (this.ranks[pRoot] < this.ranks[qRoot]) {
        this.parents[pRoot] = qRoot
      } else {
        this.parents[pRoot] = qRoot
        this.ranks[qRoot]++
      }
    }
  }
}

module.exports = UnionFind4
