

function sortArrayByParity(A){
    let left = 0
    let right = A.length-1
    let len=A.length
    while(left<right){
        while(A[left]%2===0&&left<len){
            left++
        }
        while(A[right]%2===1&&right>=0){
            right--
        }
      if(left<right){
          let temp= A[right]
          A[right]= A[left]
          A[left]=temp
      }
    }
    return A
}