function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}


export function quickSort(array) {
  _quickSort(array, 0, array.length-1)
  return array
}

function _quickSort(array, start, end) {
  if (end > start) {
    let p = partition(array, start, end)
    _quickSort(array, start, p - 1)
    _quickSort(array, p + 1, end)
  }
}

function partition(array, l, r) {
  let stop = array[l];
  let i;
  let j = l; //j 作为大于stop 与 小于stop的边界
  for (i = l + 1; i <= r; i++) {
    if (array[i] < stop) {
      swap(array, i, ++j)
    }
  }
  swap(array, l, j)
  return j
}

/**
 * 
 * @param {双路快排} array 
 */
export function quickSort2Ways(array) {
  _sort2Ways(array, 0, array.length - 1)
  return array
}
function _sort2Ways(array, start, end) {
  let pleft = start + 1
  let pright = end
  let v = array[start]
  if (start >= end) return
  while (pleft < pright) {
    while (pleft < pright && array[pleft] < v) {
      pleft++
    }
    while (pright > start && array[pright] > v) {
      pright--
    }
    if (pleft >= pright) break
    swap(array, pleft, pright)
    pleft++;
    pright--
  }
  swap(array, start, pright)
  _sort2Ways(array, start, pright - 1) //不包含pright
  _sort2Ways(array, pright + 1, end)
}

export function quickSort3Ways(array) {
  _quickSort3Way(array, 0, array.length - 1)
  return array
}
function _quickSort3Way(array, start, end) {
  if (start >= end) return
  let v = array[start];
  let left = start;
  let right = end + 1
  let current = start + 1
  while (current < right) {
    if (array[current] < v) {
      left++
      swap(array, left, current)
      current++
    } else if (array[current] > v) {
      right--
      swap(array, current, right)
    } else {
      current++
    }

  }
  swap(array, start, left)
  _quickSort3Way(array, start, left - 1)
  _quickSort3Way(array, right, end)
}
