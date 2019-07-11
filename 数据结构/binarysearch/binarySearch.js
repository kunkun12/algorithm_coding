// 二分排序本质是不断地缩小查询范围来进行查询，时间复杂度为O(logN)

/**
 *
 * 从排序数组中返回对应Value值得索引，如果不存在返回负一
 * 循环解法
 *
 */

export function binarySearch(array, value) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    //* 是小于等于。如果只是小于的话，low和hight可能会相等则会被遗漏判断
    let mid = Math.floor(low + (high - low) / 2); //* Math.floor 是向下取整. 为防止溢出 不要直接使用(low+hight)/2
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}


