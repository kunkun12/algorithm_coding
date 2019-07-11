var intersection = function(nums1, nums2) {
  let set = new Set()
  let i=0;
  let len = nums1.length
  while(i<len){
      set.add(nums1[i])
      i++
  }
  i = 0
  len = nums2.length
  let set2 = new Set()
  while(i<len){
      if(set.has(nums2[i])){
          set2.add(nums2[i])
      }
      i++
  }
  return [...set2]
};