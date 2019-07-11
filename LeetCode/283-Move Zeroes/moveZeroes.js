/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let length = nums.length;
    let i=0;
    let j=0;
    for(;i<length;i++){
        if(nums[i]){
            if(j!==i){
                 nums[j]=nums[i]
            }
            j++
        }
    }
    for(m=j;m<length;m++){
        nums[m]=0
    }
};