/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    
    this.sums=[nums[0]]
    this.nums=nums
    let i =1;
    let len = nums.length
    for(;i<len;i++){
        this.sums[i]=this.sums[i-1]+nums[i]
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sums[j]-this.sums[i]+this.nums[i]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */