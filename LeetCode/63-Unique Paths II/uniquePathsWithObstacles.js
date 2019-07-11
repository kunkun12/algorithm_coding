/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length
    if(m==0) return 0
    let n = obstacleGrid[0].length
 
    let dp= []
    let i=0
    while(i<m){
        dp.push(new Array(n).fill(0))
        i++
    }
    i=0
    
    while(i<m&&obstacleGrid[i][0]!==1){
             dp[i][0]=1
             i++
    }
    
    i=0
    while(i<n&&obstacleGrid[0][i]!==1){
             dp[0][i]=1
              i++
    }
    let j,k
    for(j=1;j<m;j++){
        for(k=1;k<n;k++){
            if(obstacleGrid[j][k]===1){
                dp[j][k]=0
            }else{
                 dp[j][k]=dp[j][k-1]+dp[j-1][k]
            }
        }
    }
    return dp[m-1][n-1]
};