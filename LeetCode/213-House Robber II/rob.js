/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length ==0)return 0
   if(nums.length==1)return nums[0]
   if(nums.length ===2) return Math.max(nums[0],nums[1])
   let sum1 = nums[0]+rob1(nums.slice(2,-1))
   let sum2 = rob1(nums.slice(1))
   return Math.max(sum1,sum2)
   
};

function rob1(nums) {
   if(nums.length===0) return 0
   if(nums.length===1) return  nums[0]
       max = []
       pre2=nums[0]
       pre1=Math.max(nums[0],nums[1])
       max = pre1
       let len = nums.length
       for(var i = 2;i<len;i++){
           max=Math.max(pre1,pre2+nums[i])
           pre2=pre1
           pre1=max
       }
      return max
};