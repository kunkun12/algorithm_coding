/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  let res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  dfs(nums, 0, [], res, len);
  return res;
};
function dfs(nums, start, temp, res, len) {
  res.push([...temp]);
  for (let i = start; i < len; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) return;
    temp.push(nums[i]);
    dfs(nums, i + 1, temp, res, len);
    temp.pop();
  }
}
