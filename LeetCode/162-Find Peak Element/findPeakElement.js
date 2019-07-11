/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let len = nums.length
    if(nums.length===1) return 0
    if(nums.length===2){
     return nums[0]>nums[1]?0:1
    }
    for(let i=0;i<nums.length;i++){
        if(i===0){
            if(nums[0]>nums[1]){
                return 0
            }
        }else if(i<len-1){
            if(nums[i]>nums[i-1]&&nums[i]>nums[i+1]){
                return i
            }
        }else{
            if(nums[len-1]>nums[len-2]){
                return len-1
            }
        }
    }
    return -1
};