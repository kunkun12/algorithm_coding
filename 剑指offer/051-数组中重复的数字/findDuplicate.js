// 不能排序，不能接触map 
// 采用二分思想， 
function findDuplicate(nums) {
  let start = 1
  let end = nums.length
  let mid
  while (start < end) {
    mid = Math.floor(start + (end - start) / 2)
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++
    }
    if (count > mid) {
      end = mid
    } else {
      start = mid + 1
    }
  }
  return start

}
