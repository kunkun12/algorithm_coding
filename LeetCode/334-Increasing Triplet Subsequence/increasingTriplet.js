/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let m1=Number.MAX_SAFE_INTEGER
    let m2 = Number.MAX_SAFE_INTEGER
    for(let i =0;i<nums.length;i++){
        if(m1>=nums[i]){
            m1=nums[i]
        }else if(m2>=nums[i]){
            m2=nums[i]
        }else{
            return true
        }
    }
    return false
};