/**
 * initialize your data structure here.
 */

class MyHeap {
  constructor(isMinHeap = true) {
    this._data = []; // 内部数组，第一个元素从索引1开始
    this._count = 0;
    this.isMinHeap = isMinHeap;
  }

  get size() {
    return this._count;
  }
  _compare(a, b) {
    if (a > b) {
      return this.isMinHeap ? false : true;
    } else {
      return this.isMinHeap ? true : false;
    }
  }
  get isEmpty() {
    return this._count === 0;
  }
  _swap(i, j) {
    let temp = this._data[i];
    this._data[i] = this._data[j];
    this._data[j] = temp;
  }
  insert(item) {
    this._count++;
    this._data[this._count] = item;
    this.shiftUp(this._count);
  }
  shiftUp(k) {
    let current = k;
    let parent = Math.floor(current / 2);
    while (
      current > 1 &&
      this._compare(this._data[current], this._data[parent])
    ) {
      this._swap(current, parent);
      current = parent;
      parent = Math.floor(current / 2);
    }
    // console.log(this.isMinHeap?'最小堆':"最大堆", this._data)
  }
  extractTop() {
    if (this._count >= 1) {
      let top = this._data[1];
      this._swap(1, this._count);
      this._count--;
      this.shiftDown(1);
      return top;
    }
  }
  get top() {
    return this._data[1];
  }
  shiftDown(k) {
    while (2 * k <= this._count) {
      let child = 2 * k;
      if (
        child + 1 <= this._count &&
        this._compare(this._data[child + 1], this._data[child])
      ) {
        child = 2 * k + 1;
      }
      if (this._compare(this._data[k], this._data[child])) break;
      this._swap(k, child);
      k = child;
    }
  }
}

var MedianFinder = function() {
  // this.count&1===0 或者 this.count%2==0 判断数
  this.minHeap = new MyHeap(true);
  this.maxHeap = new MyHeap(false);
  this.count = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  // this.count&1===0 或者 this.count%2==0 判断数
  this.count++;
  if (this.count % 2 === 0) {
    if (!this.maxHeap.isEmpty && num < this.maxHeap.top) {
      this.maxHeap.insert(num);
      num = this.maxHeap.extractTop();
    }
    this.minHeap.insert(num);
  } else {
    if (!this.minHeap.isEmpty && num > this.minHeap.top) {
      this.minHeap.insert(num);
      num = this.minHeap.extractTop();
    }
    this.maxHeap.insert(num);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  let res;
  if (this.count & 1) {
    res = this.maxHeap.top;
  } else {
    res = (this.maxHeap.top + this.minHeap.top) / 2;
  }
  return res;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
