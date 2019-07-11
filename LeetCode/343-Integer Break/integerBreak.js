/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp =[]
    dp[1]=1
    dp[2]=1
    dp[3]=2
    for(let i =4;i<=n;i++){
        dp[i]=-1
        for(let j=1;j<i;j++){
            dp[i]=Math.max(dp[i],dp[i-j]*j,(i-j)*j)
        }
    }
    return dp[n]
};