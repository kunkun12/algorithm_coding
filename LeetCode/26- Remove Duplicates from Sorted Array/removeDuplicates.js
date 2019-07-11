/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  
    let res =[]
    let m=0
    for(let i=1;i<nums.length;i++){
     if(nums[m]!=nums[i]){
          m++
         nums[m]=nums[i]
     }   
    }
  
    nums.length=m+1
    return m+1
};