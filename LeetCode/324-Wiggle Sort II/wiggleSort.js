/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
       nums.sort((a,b)=>a-b)
       let temp = [...nums]
       let len = nums.length,k = Math.floor((len+1)/2),j=len;
       for(let i=0;i<len;i++){
           nums[i] = i&1?temp[--j]:temp[--k]
       }
};