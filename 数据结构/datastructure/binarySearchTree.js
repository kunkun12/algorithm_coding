class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this._count = 0
    this.root = null
  }
  get size() {
    return this._count
  }
  get isEmpty() {
    return this._count === 0
  }
  insert(key, value) {
    this.root = this._insert(this.root, key, value)
  }
  _insert(node, key, value) {
    if (node == null) {
      this._count++
      return new Node(key, value)
    }
    if (key < node.key) {
      node.left = this._insert(node.left, key, value)
    } else if (key > node.key) {
      node.right = this._insert(node.right, key, value)
    } else {
      node.value = value
    }
    return node
  }
  contain(key) {
    return _contains(this.root, key)
  }
  _contains(root, key) {
    if (root === null) {
      return false
    }
    if (root.key === key) {
      return true
    } else if (key > root.key) {
      return _contains(root.right, key)
    } else {
      return _contains(root.left, key)
    }
  }
  search(key) {
    return _search(this.root, key)
  }
  _search(root, key) {
    if (root == null) return null
    if (key > root.key) {
      return _search(root.right, key)
    } else if (key < root.key) {
      return _search(root.left, key)
    } else {
      return root.value
    }
  }
  preOrder() {
    this._preOrder(this.root)
  }
  _preOrder(root) {
    if (root === null) return
    console.log(root.value)
    _preOrder(root.left)
    _preOrder(root.right)
  }
  //中序遍历
  inOrder() {
    this._inOrder(this.root)
  }
  _inOrder(node) {
    if (node == null) return
    this._inOrder(node.left)
    console.log(node.value)
    this._inOrder(node.left)
  }
  postOrder() {
    this._postOrder(this.root)
  }
  _postOrder(node) {
    if (node == null) return
    _postOrder(node.left)
    _postOrder(node.right)
    console.log(node.value)
  }
  // 广度优先遍历
  BFS() {
    this._BFS(this.root)
  }
  _BFS(node) {
    let queue = [];
    queue.unshift(node)
    while (queue.length) {
      let top = queue.pop()
      console.log(top.key)
      if (top.left) {
        queue.unshift(top.left)
      }
      if (top.right) {
        queue.unshift(top.right)
      }
    }
  }
  // 层次打印
  printLayer() {
    let list = []
    let queue = []
    let level = 0
    let currentLevelCount = 1
    let nexLevelCount = 0
    queue.unshift(this.root)
    while (queue.length) {
      list[level] = list[level] || []
      let top = queue.pop()
      currentLevelCount--
      list[level].push(top.key)
      if (top.left) {
        queue.unshift(top.left)
        nexLevelCount++
      }
      if (top.right) {
        queue.unshift(top.right)
        nexLevelCount++
      }
      if (currentLevelCount === 0) {
        level++
        currentLevelCount = nexLevelCount
        nexLevelCount = 0
      }
    }
    list.map(i => i.toString()).forEach(i => console.log(i))
  }

  getMax() {
    let item = _max(this.root)
    return item
  }
  _max(node) {
    if (node == null) return null
    if (node.right) {
      return this._max(node.right)
    } else {
      return node
    }
  }
  getMin() {
    let item = _min(this.root)
    return item
  }
  _min(node) {
    if (node == null) return null
    if (node.right) {
      return this._min(node.right)
    } else {
      return node
    }
  }

  removeMin() {
    if (this.root) {
      this.root = _removeMin(this.root)
    }
  }
  _removeMin(root) {
    if (root.left === null) {
      return root.right
    } else {
      root.left = this._removeMin(root.left)
    }
  }
  removeMax() {
    this._removeMax(this.root)
  }
  _removeMax(node) {
    if (node.right === null) {
      let left = node.left
      node === null
      this._count--
      return left
    } else {
      node.right = this._removeMax(node.right)
    }
  }
  removeNode(key) {
    this.root = this._removeNode(this.root, key)
  }
  _removeNode(root, key) {
    if (root === null) return
    if (key > root.key) {
      root.right = this._removeNode(root.right, key)
    } else if (key < root.key) {
      root.left = this._removeNode(root.left, key)
    } else {
      if (root.right === null) {
        let left = root.left
        root = null
        return left
      }
      if (root.left === null) {
        let right = root.right
        root = null
        return right
      }

      let left = root.left;
      let right = root.right
      let minNode = this.getMin(right)
      right = this.removeMin(right)
      minNode.left = left
      minNode.right = right
      return minNode
    }
  }
}


let searchTree = new BinarySearchTree()
searchTree.insert(10)
searchTree.insert(3)
searchTree.insert(2)
searchTree.insert(4)
searchTree.insert(5)
searchTree.insert(6)
searchTree.insert(70)
searchTree.insert(8)
searchTree.printLayer()
searchTree.removeMax()
searchTree.printLayer()
