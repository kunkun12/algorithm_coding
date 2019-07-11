/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length==0) return
 let sum=0
 let maxSum=Number.MIN_SAFE_INTEGER
 // 以i结尾连续和的最大值
 for(let i =0;i<nums.length;i++){
     if(sum<0){
         sum=nums[i] 
     }else{
         sum+=nums[i]
     }
     maxSum =  Math.max(sum,maxSum)
 }
 return maxSum
};

