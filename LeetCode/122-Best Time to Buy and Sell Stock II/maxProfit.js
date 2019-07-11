// 分析：贪心法。从前向后遍历数组，只要当天的价格高于前一天的价格，就算入收益。
function maxProfit(prices){
    if(prices.length<=1)return 0
    let res = 0
    for(let i =1;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            res+=prices[i]-prices[i-1]
        }
    }
    return res
}