function containsNearbyDuplicate(nums,k){
    let set = new Set()
    let len = nums.length
    for(let i=0;i<len;i++){
      if(i<k){
          if(set.has(nums[i])){
              return true
          }else{
              set.add(nums[i])
          }
      }else{
          if(set.has(nums[i])){
              return true
          }
          set.add(nums[i])
          set.delete(nums[i-k])
      }
    }
    return false
}