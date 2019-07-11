export function mergeSort(array) {
  _mergeSort(array, 0, array.length - 1);
  console.log(array)
  return array;
}

function _mergeSort(array, start, end) {
  if (end > start) {
    let mid = Math.floor((start + end) / 2)
    _mergeSort(array, start, mid)
    _mergeSort(array, mid + 1, end)
    if (array[mid] > array[mid + 1]) {
      _merge2(array, start, mid, end)
    }

  }
}

function _merge(array, start, mid, end) {
  let leftArray = array.slice(start, mid + 1)
  let rightArray = array.slice(mid + 1, end + 1)
  let pleft = 0;
  let pright = 0;
  for (let i = start; i <= end; i++) {
    if (pleft >= leftArray.length) {
      array[i] = rightArray[pright]
      pright++
    } else if (pright >= rightArray.length) {
      array[i] = leftArray[pleft]
      pleft++
    } else {
      if (leftArray[pleft] > rightArray[pright]) {
        array[i] = rightArray[pright]
        pright++
      } else {
        array[i] = leftArray[pleft]
        pleft++
      }
    }
  }
}


//第二种merge
function _merge2(array, start, mid, end) {
  let leftArray = array.slice(start, mid + 1)
  let rightArray = array.slice(mid + 1, end + 1)
  let beginIndex = start;
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] > rightArray[0]) {
      array[beginIndex] = rightArray.shift()
    } else {
      array[beginIndex] = leftArray.shift()
    }
    beginIndex++
  }
  while (rightArray.length) {
    array[beginIndex++] = rightArray.shift()
  }
  while (leftArray.length) {
    array[beginIndex++] = leftArray.shift()
  }
}
