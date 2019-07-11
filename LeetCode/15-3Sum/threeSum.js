function threeSum(nums){
    let left
    let right
    let res=[]
    let len = nums.length
    if(len<3) return []
    nums = nums.sort((a,b)=>a-b)
    for(let i =0;i<len;i++){
        if(i>0&&nums[i]===nums[i-1])continue
        let target = -nums[i]
        left = i+1
        right = len-1
        while(left<right){
            if((nums[left]+nums[right])===target){
                res.push([nums[i],nums[left],nums[right]])
                while (left < right && nums[left] === nums[left+1]) left++;
                while (left < right && nums[left] === nums[right-1]) right--;
                left++;
                right--;
            }else if((nums[left]+nums[right])<target){
                left++
            }else{
                right--
            }
        }
    }
    return res
}

console.log(threeSum([-1,0,1,2,-1,-4]))