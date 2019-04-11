function twoSum(nums, starget) {
  var l = nums.length;
  for (var i = 0; i < l; i++) {
    var index = nums.indexOf(target - nums[i]);
    if (index != -1 && i != index) {
      return [i, index];
    }
  }
  return [];
}
// 可以结合map 缓存方便查找