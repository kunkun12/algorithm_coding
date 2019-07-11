function minSubArrayLen(s, nums) {
  let left = 0;
  let len = nums.length;
  let right = 0;
  let sum = nums[0];
  let res = len + 1;
  while(left<=right&&right<len){
    if(sum<s){
        if(right<len-1){
          right++
          sum+=nums[right]
        }else{
          break
        }
    }else{
        res = Math.min(res,right-left+1)
        sum-=nums[left]
        left++
    }
  }
  return res==len+1?0:res
}