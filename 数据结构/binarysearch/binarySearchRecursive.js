  /**
   * 递归实现 从排序数组中返回对应Value值得索引，如果不存在返回 -1
   *  递归解法
   */
  export function binarySearchRecursive(arr, low, high, value) {
    if (low > high) {
      return -1;
    }
    let mid = Math.floor(low + (high - low) / 2);
  
    if (arr[mid] > value) {
      return binarySearchRecursive(arr, low, mid - 1, value);
    } else if (arr[mid] < value) {
      return binarySearchRecursive(arr, mid + 1, high, value);
    } else {
      return mid;
    }
  }
  