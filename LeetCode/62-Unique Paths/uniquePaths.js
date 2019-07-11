/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp= new Array(m).fill([])
    let i=0
    while(i<m){
        dp[i].push([])
        i++
    }
    i=0
    while(i<m){
        dp[i][0]=1
        i++
    }
    
    i=0
    while(i<n){
        dp[0][i]=1
        i++
    }
    let j,k
    for(j=1;j<m;j++){
        for(k=1;k<n;k++){
            dp[j][k]=dp[j][k-1]+dp[j-1][k]
            
        }
    }
  
    return dp[m-1][n-1]
};