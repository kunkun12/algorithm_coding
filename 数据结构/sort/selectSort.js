//N-1轮 比较，每一轮选出最小的下标标，该轮结束将当前最小的元素进行交换至于适合的位置
function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/**
 * 选择排序
 */

export function selectSort(array) {
  let length = array.length
  for (var i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (var j = i + 1; j < length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    if (minIndex != i) {
      swap(array, minIndex, i)
    }
  }
  return array
}
