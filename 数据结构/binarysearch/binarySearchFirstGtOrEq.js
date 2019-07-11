  /**
   * 二分法变形，查找第一个大于或者等于value的下标，不存在返回-1
   * @param {*} array 
   * @param {*} value 
   */
  
  export function binarySearchFirstGtOrEq(array,value){
    let low = 0;
    let high = array.length-1;
    let mid;
    while (low <= high) {
      mid = Math.floor(low + (high - low) / 2);
      if (array[mid] >= value) {
        high = mid - 1; //向左收缩
      } else {
        low = mid + 1;//向右收缩
      }
      
    }
    if(low<=array.length-1&&array[low]>=value){
      return low
    }else{
      return -1
    }
  }
  
  