//1、 顺序遍历时间复杂度为K 不可取
//2、 二分查找法 找到等于K的元素，然后往两边扩张 当所有元素都为k时候时间复杂度最大为N
//3、 二分查找  查找出第一个等于K的元素的索引m 以及最后一个等于K的元素的索引  则个数为 M-N+1
function getNumOfK(nums, k) {
  if (nums.length == 0) return 0;
  let start = getFisrtIndexOfk(nums, k);
  let end = getLastIndexOfk(nums, k);
  if (start == -1) {
    return 0;
  } else {
    return end - start + 1;
  }
}

function getFisrtIndexOfk(nums, k) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.floor(low + (high - low) / 2);
  while (low <= high) {
    if (nums[mid] < k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
    mid = Math.floor(low + (high - low) / 2);
  }
  if (low < nums.length && nums[low] == k) {
    return low;
  } else {
    return -1;
  }
}

function getLastIndexOfk(nums, k) {
  let low = 0;
  let high = nums.length - 1;
  let mid;
  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] <= k) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (high > -1 && nums[high] == k) {
    return high;
  } else {
    return -1;
  }
}

let array = [];

console.log(getFisrtIndexOfk(array, 4));
console.log(getLastIndexOfk(array, 4));
