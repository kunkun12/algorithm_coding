function canJump(nums){
    let len = nums.length;
    let reach = nums[0]
    for(let i =1;i<len;i++){
        if(i>reach||reach>=len-1)break;
        reach = Math.max(reach,i+nums[i])
    }
    return reach >=len-1
}