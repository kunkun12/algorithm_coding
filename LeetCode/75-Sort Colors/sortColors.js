var sortColors = function(nums) {
  let count0=0
  let count1 = 0
  let count2 =0
  let i=0
  let len=nums.length
  while(i<len){
      if(nums[i]===0){
          count0++
      }else if(nums[i]===1){
          count1++
      }else if(nums[i]===2){
          count2++
      }
      i++
  }
  i=0
  while(count0--){
      nums[i++]=0
  }
  while(count1--){
      nums[i++]=1
  }
  while(count2--){
     nums[i++]=2
  }
  return nums
};


function swape(nums,i,j){
    let temp=nums[i]
    nums[i]=nums[j]
    nums[j]=temp
}
function sortColors2(nums){
    let p0=0
    let current=0
    let p2=nums.length-1
    while(current<=p2){
       if(nums[current]===0){
            if(p0!=current){
                swape(nums,p0,current)
            }
            p0++
            current++
       }else if(nums[current]===1){
            current++
       }else{
            swape(nums,current,p2)
            p2--
       }
    }
}