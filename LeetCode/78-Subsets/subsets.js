/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = [];
  let len = nums.length;
  dfs(nums, 0, [], res, len);
  return res;
};
function dfs(nums, start, temp, res, len) {
  res.push([...temp]);
  for (let i = start; i < len; i++) {
    temp.push(nums[i]);
    dfs(nums, i + 1, temp, res, len);
    temp.pop();
  }
}
