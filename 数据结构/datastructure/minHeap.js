class MinHeap {
  constructor() {
    this._data = [] // 内部数组，第一个元素从索引1开始
    this._count = 0
  }

  get size() {
    return this._count
  }
  // 优化生成堆的方案
  createFromArray(array) {
    for (let i = 0; i < array.length; i++) {
      this._data[i + 1] = array[i]
    }
    this._count = array.length
    let k = Math.floor(this._count / 2)
    while (k >= 1) {
      this.shiftDown(k)
      k--
    }
  }
  get isEmpty() {
    return this._count === 0
  }
  _swap(i, j) {
    let temp = this._data[i]
    this._data[i] = this._data[j]
    this._data[j] = temp
  }
  insert(item) {
    this._count++
    this._data[this._count] = item
    this.shiftUp(this._count)
  }
  shiftUp(k) {
    let current = k;
    let parent = Math.floor(current / 2)
    while (current > 1 && (this._data[current] < this._data[parent])) {
      this._swap(current, parent)
      current = parent
      parent = Math.floor(current / 2)
    }
  }
  ExtractMin() {
    if (this._count >= 1) {
      let max = this._data[1]
      this._swap(1, this._count)
      this._count--
      this.shiftDown(1)
      return max
    }
  }
  shiftDown(k) {
    while (2 * k <= this._count) {
      let maxChild = 2 * k
      if (maxChild + 1 <= this._count && this._data[maxChild] > this._data[maxChild + 1]) {
        maxChild = 2 * k + 1
      }
      if (this._data[k] < this._data[maxChild]) break
      this._swap(k, maxChild)
      k = maxChild
    }
  }
  print() {
    console.log(this._data.slice(1, this._count + 1).toString())
  }
}

module.exports = MinHeap

// //测试代码
// let minHeap = new MinHeap();


// minHeap.insert(4)
// minHeap.insert(5)
// minHeap.insert(7)
// minHeap.insert(8)
// minHeap.insert(-11)
// minHeap.insert(1)
// minHeap.insert(2)
// minHeap.insert(3)
// minHeap.print()


// minHeap.print()

// let minHeap1 = new MinHeap();

// // maxHeap1.createFromArray([1,2,3,4,5,7,8])

// minHeap1.print()
