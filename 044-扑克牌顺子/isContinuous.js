function isContinuous(nums){
    if(nums.length!=5)return false
    nums.sort((a,b)=>a-b);
    //统计0的个数
    let count = nums.filter(i=>i===0).length
    for(let i=count+1;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            return false 
        }else{
            let m = nums[i]-nums[i-1]-1 //nums[i] 与nums[i-1]之间隔了几个数字
            count =count -m
        }
    }
    if(count>=0){
        return true
    }else{
        return false
    }
}

isContinuous([1,5,3,4,2])
