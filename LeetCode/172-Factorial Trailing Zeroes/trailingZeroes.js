
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let zeroCount=0
  while(n){
    n = Math.floor(n/5)
    zeroCount+=n
  }

  return zeroCount
};