class Queue {
  constructor(n) {
    this._data = []
    this._maxCount = n || 100000
  }
  get size() {
    return this._data.length
  }
  enQueue(value) {
    if (this.size < this._maxCount) {
      this._data.unshift(value)
    }
  }
  get isEmpty() {
    return this.size === 0
  }
  deQueue() {
    if (!this.isEmpty) {
      return this._data.pop()
    } else {
      return null
    }

  }
  front() {
    if (this.isEmpty) return
    return this._data[this.size - 1]
  }
}

module.exports = Queue
