/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i =0
    for(let m=0;m<nums.length;m++){
        if(nums[m]!=val){
            nums[i++]=nums[m]
        }
    }
    nums.length=i
    return i
};