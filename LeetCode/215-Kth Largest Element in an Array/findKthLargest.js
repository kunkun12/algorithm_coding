/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


function findKthLargest(nums,k){
    _findKthLargest(nums,0,nums.length-1,k)
    return nums[k-1]
  }
  
  function _findKthLargest(nums,left,right,k){
   //   console.log(left,right)
      if(left>=right) return
      let index = partiton(nums,left,right)
      if(index>k-1){
          return _findKthLargest(nums,left,index-1,k)
      }else if(index<k-1){
          console.log('<',index)
          return _findKthLargest(nums,index+1,right,k)
      }else{
          return 
      }
  }
  
  function swap(array,a,b){
      let temp = array[a]
      array[a]=array[b]
      array[b]=temp
  }
  function partiton(nums,left,right){
      let pivot=nums[left]
      let p = left
      for(let i = left+1;i<=right;i++){
          if(nums[i]>=pivot){
              p++
              swap(nums,i,p)
          }
      }
      swap(nums,p,left)
      return p
  }
  