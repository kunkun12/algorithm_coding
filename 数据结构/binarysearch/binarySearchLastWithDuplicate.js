  
  /**
   * 二分法变形 
   * 数组中可能有重复的数字，找出最后一个等于Value的数 返回索引 ，找不到返回-1
   * 查找key值的元素有好多个，返回这些元素最左边的元素下标。
   */
  
  export function binarySearchLastWithDuplicate(array, value) {
    let low = 0;
    let high = array.length-1;
    let mid;
    while (low <= high) {
      mid = Math.floor(low + (high - low) / 2);
      if (array[mid] > value) {
        high = mid - 1; //向左收缩
      } else {
        low = mid + 1;//向右收缩
      }
    }
    //到这里必然是low>high
    if (high >0 && array[high] == value) {
      return high;
    }
    return -1;
  }