

function maxProfit(prices){
    let min = Number.MAX_VALUE
    let res = 0
    for(let i of prices){
        min = Math.min(min,i)
        res = Math.max(res,i-min)
    }
    return res
}








// class Solution {
//     public int maxProfit(int[] prices) {
//         int gap = 0;
//         int maxGap = 0;
//         if(prices.length == 0) return maxGap;
//         int minNum = prices[0];
//         for(int i=1; i<prices.length; i++){
//             gap = prices[i] - minNum;
//             maxGap = Math.max(gap, maxGap);
//             minNum = Math.min(minNum, prices[i]);
//         }
//         return maxGap;    
//     }
// }