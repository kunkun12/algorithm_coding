// 最小索引堆，优点 不需要交换元素,只需要交换存储元素的索引，方便修改权重,使用反向查找表，方便查出元素在堆中的位置


export default class IndexMaxHeap {
  constructor() {
    this._data = [] // 内部数组，存储数据 索引从1开始
    this._count = 0
    this._indexes = [] // 索引从1开始
  }

  get size() {
    return this._count
  }

  get isEmpty() {
    return this._count === 0
  }
  _swap(i, j) {
    let temp = this._indexes[i]
    this._indexes[i] = this._indexes[j]
    this._indexes[j] = temp
  }
  insert(i, item) {
    i++
    this._data[this._count] = item
    this._indexes[this._count + 1] = i
    this._count++
    this.shiftUp(this._count)
  }
  shiftUp(k) {
    let current = k;
    let parent = Math.floor(current / 2)
    while (current > 1 && (this._data[this._indexes[current]] > this._data[this._indexes[parent]])) {
      this._swap(current, parent)
      current = parent
      parent = Math.floor(current / 2)
    }
  }
  get maxIndex() {
    return this._indexes[1] - 1
  }
  change(i, item) {
    i++
    this._data[i] = item
    for (let j = 1; j <= this._count; j++)
      if (this._indexes[j] == i) {
        shiftUp(j);
        shiftDown(j);
        break;
    }
  }
  getItem(i) {
    return this._data[i + 1]
  }
  ExtractMax() {
    if (this._count >= 1) {
      let max = this._data[this._indexes[1]]
      this._swap(1, this._count)
      this._count--
      this.shiftDown(1)
      return max
    }
  }
  ExtractMaxIndex() {
    if (this._count >= 1) {
      let max = this._indexes[1]
      this._swap(1, this._count)
      this._count--
      this.shiftDown(1)
      return max
    }
  }
  shiftDown(k) {
    while (2 * k <= this._count) {
      let maxChild = 2 * k

      if (maxChild + 1 <= this._count && this._data[this._indexes[maxChild]] < this._data[this._indexes[maxChild + 1]]) {
        maxChild = 2 * k + 1
      }
      if (this._data[this._indexes[k]] > this._data[this._indexes[maxChild]]) break
      this._swap(k, maxChild)
      k = maxChild
    }
  }
  print() {
    console.log(this._data.slice(1, this._count + 1).toString())
  }
}



//测试代码
//let maxHeap = new MaxHeap();

// maxHeap.insert(13)
// maxHeap.insert(24)
// maxHeap.insert(33)
// maxHeap.insert(42)
// maxHeap.insert(53)
// maxHeap.insert(74)
// maxHeap.insert(83)
// maxHeap.print()





