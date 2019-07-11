/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length === 0) {
   return nums
 }
 let left = [] // 右侧的乘积
 let right = [] // 左侧的乘积
 let len = nums.length
     left[0]=1
 for(let i =1;i<len;i++)left[i]=left[i-1]*nums[i-1]
 right[len-1]=1
 for(let j=len-2;j>=0;j--)right[j]=right[j+1]*nums[j+1]
 let res=[]
 for(let i =0;i<len;i++){
   res[i]=left[i]*right[i]
 }
 return res

}