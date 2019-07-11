function coinChange(coins,amout){
    let dp=[0]
    for(let i =1;i<=amout;i++){
        dp[i]=amout+1
        for(let j =0;j<coins.length;j++){
            if(coins[j]<=i){
                dp[i]=Math.min(dp[i],dp[i-coins[j]]+1)
            }
        }
    }
    return dp[amount]>amount?-1:dp[amount]
}