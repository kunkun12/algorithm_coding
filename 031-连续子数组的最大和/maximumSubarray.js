
function maxSubArray(nums){
    if(nums.length===0) return 0
    let sum = 0;
    let maxSum =0
    for(let i =0;i<nums.length;i++){
        sum = 0
        for(let j= i+1;j<nums.length;j++){
            sum+=num[j]
            if(sum>maxSum){
                maxSum=sum
            }
        }
    }
    return maxSum
}


function maxSubArray2(nums){
    if(nums.length==0) return
    let preSum=0
    let sum=0
    let maxSum=null
    for(let i =0;i<nums.length;i++){
        if(preSum<0){
            sum=nums[i]
        }else{
            sum+=nums[i]
        }
        if(maxSum==null||sum>maxSum){
            maxSum = sum
        }
        preSum = sum
    }
    return maxSum
}