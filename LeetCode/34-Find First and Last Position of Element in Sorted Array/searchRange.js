/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length == 0) return [-1,-1]
       
   return [getFisrtIndexOfk(nums, target), getLastIndexOfk(nums, target)]
};


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