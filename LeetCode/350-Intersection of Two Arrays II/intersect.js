var intersect = function(nums1, nums2) {
  let map = new Map()
//  let map2 = new Map()
  let len = nums1.length
  let i=0
  let res =[]
  while(i<len){
      if(map.has(nums1[i])){
          map.set(nums1[i],map.get(nums1[i])+1)
      }else{
          map.set(nums1[i],1)
      }
      i++
  }
  i=0
  len=nums2.length
  while(i<len){
      if(map.has(nums2[i])&&map.get(nums2[i])>=1){
          res.push(nums2[i])
          map.set(nums2[i],map.get(nums2[i])-1)
      } 
      i++
  }
  return res
};