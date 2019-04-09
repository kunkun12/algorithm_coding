function verifyPostOrder(array){
    if(array.length==0) return true
  return   _verifyPostOrder(array,0,array.length-1)
}

function _verifyPostOrder(array,start,end){
    if(start>=end)return true
    let low = start
    let high = end-1

    while(array[low]<array[end]){
        low++
    }
    while(array[high]>array[end]){
        high--
    }
    if(low<high)return false

    return _verifyPostOrder(array,start,low-1)&&_verifyPostOrder(array,low,end-1)

}