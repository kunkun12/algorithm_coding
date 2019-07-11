var fourSum = function(nums, target) {

  let i = 0;
  let j = 0;
  let left;
  let right;
  let res = [];
  let len = nums.length;
  nums = nums.sort((a, b) => a - b);
  for (; i < len - 3; i++) {
    if (i >0 && nums[i] === nums[i-1]) continue;
    for (j = i+1; j<len-2; j++) {
      if (j>i+1 && nums[j] === nums[j-1])  continue;
      let sum2 = target - (nums[i] + nums[j]);
      left = j + 1;
      right = len - 1;
      while (left < right) {
        if (nums[left] + nums[right] === sum2) {
          res.push([nums[i], nums[j],nums[left], nums[right]]);  
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
             left++;
          right--;
        } else if (nums[left] + nums[right] > sum2) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  return res;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  let res = [],
    temp = [];
  _fourSum(nums.sort((a, b) => a - b), target, 0, res, temp);
  return res;
};

function _fourSum(nums, target, n, res, temp) {
  if (target == 0 && temp.length == 4) {
    res.push([...temp]);
  }
  if (temp.length > 4) return;
  for (let i = n; i < nums.length; i++) {
    if (i > n && nums[i] === nums[i - 1]) continue;
    temp.push(nums[i]);
    _fourSum(nums, target - nums[i], i + 1, res, temp);
    temp.pop();
  }
}


