// 1、暴力求解比较简单 
// 2 借用双端队列 
function maxSlidingWindows(nums,k){
    if(nums.length==0||k==0||nums.length<k){
        return []
    }
    let indexDbQueue=[] // 双端队列存储的是索引
    let result = []
    let len = nums.length
    for(let i =0;i<len;i++){
        while(indexDbQueue.length&&nums[i]>nums[indexDbQueue[0]]){
            indexDbQueue.shift()
        }
        indexDbQueue.unshift(i)
        if(indexDbQueue[indexDbQueue.length-1]==i-size){
            indexDbQueue.pop()
        }
        if(i>=size-1){
            result.push(nums[indexDbQueue[indexDbQueue.length-1]])
        }
    }
    return result
}