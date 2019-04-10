//稳定排序 交换的次数
function swap(array, a, b) {
  let temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}
//冒泡排序N2
function reversePairs(nums) {
  let count =0
  for(let i=0;i<nums.length-1;i++){
      for(let j=0;j<nums.length-1-i;j++){
          if(nums[j+1]<nums[j]){
            swap(nums,j,j+1)
            count++
          }
      }
  }
  return count
}

// 冒泡排序会超时，使用归并排序会好