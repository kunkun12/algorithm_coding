import MaxHeap from '../datastructure/maxHeap'

function swap(array, i, j) {
  let temp = array[i]
  array[i] = array[j]
  array[j] = temp
}


export function heapSort(array) {
  let maxHeap = new MaxHeap()
  maxHeap.createFromArray(array);
  let length = array.length;
  let newArray = [];
  while (length--) {
    newArray.unshift(maxHeap.ExtractMax())
  }
  return newArray
}
