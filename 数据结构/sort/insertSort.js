function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/**
* 插入排序
*/

export function insertSort(array) {
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
