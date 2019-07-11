/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  let left = 0;
  let start = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    left += gas[i] - cost[i];
    total += gas[i] - cost[i];
    if (left < 0) {
      left = 0;
      start = i + 1;
    }
  }
  return total >= 0 ? start : -1;
};
