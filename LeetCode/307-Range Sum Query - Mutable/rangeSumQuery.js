/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.nums=nums
    this.sums=[nums[0]]
    let i =1;
    this.len = nums.length
    for(;i<this.len;i++){
        this.sums[i]=this.sums[i-1]+this.nums[i]
    }
};

/** 
 * @param {number} i 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(i, val) {
    this.nums[i]=val
    if(i===0){
        this.sums[0]=val
    }
    i=1
  
    for(;i<this.len;i++){
        this.sums[i]=this.sums[i-1]+this.nums[i]
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
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */