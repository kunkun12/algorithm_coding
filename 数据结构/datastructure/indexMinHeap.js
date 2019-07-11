class IndexMinHeap {
  constructor() {
    this._data = [] // 内部数组，存储数据 索引从1开始
    this._count = 0
    this._indexes = [] // 索引从1开始
    this._revIndex = [] // 反向索引   rev[index[i]]=i
  }

  get size() {
    return this._count
  }

  get isEmpty() {
    return this._count === 0
  }
  _swapIndex(i, j) {
    let temp = this._indexes[i]
    this._indexes[i] = this._indexes[j]
    this._indexes[j] = temp

  }
  insert(i, item) {
    i++
    this._count++
    this._data[i] = item
    this._indexes[this._count] = i
    this._revIndex[i] = this._count
    this.shiftUp(this._count)
  }
  shiftUp(k) {
    let current = k;
    let parent = Math.floor(current / 2)
    while (current > 1 && (this._data[this._indexes[current]] < this._data[this._indexes[parent]])) {
      this._swapIndex(current, parent)
      this._revIndex[this._indexes[current]] = current
      this._revIndex[this._indexes[parent]] = parent
      current = parent
      parent = Math.floor(current / 2)
    }
  }
  get minIndex() {
    return this._indexes[1] - 1
  }
  change(i, item) {
    i++
    this._data[i] = item
    this.shiftUp(this._revIndex[i]);
    this.shiftDown(this._revIndex[i]);

  }
  getItem(i) {
    return this._data[i + 1]
  }
  ExtractMin() {
    if (this._count >= 1) {
      let min = this._data[this._indexes[1]]
      this._swapIndex(1, this._count)
      this._revIndex[this._indexes[1]] = 1
      this._revIndex[this._indexes[this._count]] = 0
      //this._data[this._indexes[this._count]] = null
      this._count--
      this.shiftDown(1)
      return min
    }
  }
  extractMinIndex() {
    if (this._count >= 1) {
      let min = this._indexes[1]
      this._swapIndex(1, this._count)
      this._revIndex[this._indexes[1]] = 1
      this._revIndex[this._indexes[this._count]] = 0
      this._data[this._indexes[this._count]] = null
      this._count--
      this.shiftDown(1)
      return min
    }
  }
  extractMinIndex() {
    if (this._count >= 1) {
      let min = this._indexes[1]
      this._swapIndex(1, this._count)
      this._revIndex[this._indexes[1]] = 1
      this._revIndex[this._indexes[this._count]] = 0
      this._count--
      this.shiftDown(1)
      return min - 1
    }
  }
  contain(w) {
    return !!this._revIndex[w + 1] //索引为w的位置是否存在元素
  }
  shiftDown(k) {
    while (2 * k <= this._count) {
      let minChild = 2 * k
      // 选出较小的子元素，让父节点与较小的比较 如果父节点大，则交换，反之 如果父节点小，则说明父节点在一个最小堆的合理位置了1
      if (minChild + 1 <= this._count && this._data[this._indexes[minChild]] > this._data[this._indexes[minChild + 1]]) {
        minChild++
      }
      if (this._data[this._indexes[k]] < this._data[this._indexes[minChild]]) break
      this._swapIndex(k, minChild)
      this._revIndex[this._indexes[k]] = k
      this._revIndex[this._indexes[minChild]] = minChild
      k = minChild
    }
  }
  print() {
    console.log(this._data.slice(1, this._count + 1).toString())
  }
}






module.exports = IndexMinHeap
