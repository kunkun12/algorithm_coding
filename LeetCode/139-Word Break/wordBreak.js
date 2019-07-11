/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict)
  let dp= new Array(s.length+1).fill(false)
  dp[0]=true
 // console.log(dp)
  for(let i=0;i<dp.length;i++){
      for(let j=0;j<i;j++){
          if(dp[j]&&set.has(s.slice(j,i))){
              dp[i] =true
              break
          }
      }
  }
  return dp.pop()
};