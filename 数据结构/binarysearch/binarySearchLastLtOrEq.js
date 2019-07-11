  // 查找第最后一个小于等于value的元素的下标
  export function binarySearchLastLtOrEq(array,value){
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
    if(array[high]<=value){
      return high
    }else{
      return -1
    }
  }