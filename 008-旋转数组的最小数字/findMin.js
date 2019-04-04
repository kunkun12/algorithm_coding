



function findMin(nums){
    let low=0;
    let high = nums.length-1
    if(nums[low]<nums[high]){
        return nums[0]
    }
    let m 
    while(low<high){
        m = Math.floor((low+high)/2)
        if(nums[m]>nums[high]){
            low=m+1
        }else{
            high=m
        }
    }
    return nums[low]
}