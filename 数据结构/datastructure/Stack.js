class Stack {
  constructor(n) {
    this._maxCount = n || 10000000
    this._data = []
  }
  pop() {
    return this._data.pop()
  }
  get isEmpty() {
    return this.size === 0
  }
  get size() {
    return this._data.length
  }
  push(v) {
    if (this.size < this._maxCount) {
      this._data.push(v)
    }
  }
  pop() {
    if (this.size !== 0) {
      return this._data.pop()
    }
  }
  front() {
    if (this.size !== 0) {
      return this._data[this.size - 1]
    }
    return null
  }

}
module.exports = Stack
