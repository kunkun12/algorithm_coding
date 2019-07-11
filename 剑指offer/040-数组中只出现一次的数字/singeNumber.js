function singleNumber(nums){
    let length = nums.length
    let res = 0
    for(let i =0;i<length;i++){
        res^=nums[i]
    }
    return res
    
}