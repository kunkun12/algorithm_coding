function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/**
 * 冒泡排序
 */

export function bubbleSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array
}
