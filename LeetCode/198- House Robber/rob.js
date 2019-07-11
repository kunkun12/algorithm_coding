var rob = function(nums) {
    if(nums.length===0) return 0
    if(nums.length===1) return  nums[0]
        max = []
        pre2=nums[0]
        pre1=Math.max(nums[0],nums[1])
        max = pre1
        let len = nums.length
        for(var i = 2;i<len;i++){
            max=Math.max(pre1,pre2+nums[i])
            pre2=pre1
            pre1=max
        }
       return max
};