/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length
    let j
      for(let i=len-2;i>=0;--i){
          if(nums[i+1]>nums[i]){
              for(j=len-1;j>i;--j){
                  if(nums[j]>nums[i])break
              }
              [nums[i],nums[j]]=[nums[j],nums[i]]
              let temp= nums.slice(i+1).reverse();
              nums.splice(i+1)
              nums.push(...temp)
              return 
          }
      }
   nums.reverse()
};