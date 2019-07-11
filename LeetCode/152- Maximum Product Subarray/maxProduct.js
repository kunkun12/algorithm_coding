/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let min =nums[0]
  let max = nums[0]
  let res =nums[0]
  for(let i=1;i<nums.length;i++){
      let min1 = min
      min = Math.min(nums[i],Math.min(nums[i]*min,nums[i]*max))
      max = Math.max(nums[i],Math.max(nums[i]*min1,nums[i]*max))
      res = Math.max(res,max)
  }
  return res
};