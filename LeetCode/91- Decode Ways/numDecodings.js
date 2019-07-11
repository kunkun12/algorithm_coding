/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s === "" || s[0] === "0") return 0;
  let dp = [1];
  let len = s.length;
  for (let i = 1; i <= len; i++) {
    dp[i] = s[i - 1] === "0" ? 0 : dp[i - 1];
    if (i > 1 && (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6"))) {
      dp[i] += dp[i - 2];
    }
  }
  return dp.pop();
};
