/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1
  let k = m + n
  while (k > 0) {
    if (i >= 0 && j >= 0) {
      if (nums1[i] > nums2[j]) {
        nums1[k - 1] = nums1[i--]
      } else {
        nums1[k - 1] = nums2[j--]
      }
    } else {
      if (i >= 0) {
        nums1[k - 1] = nums1[i--]
      }
      if (j >= 0) {
        nums1[k - 1] = nums2[j--]
      }
    }

    k--
  }
  nums1.length = m + n
};
