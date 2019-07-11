/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let set  = new Set(nums)
    let res = 0
    for(let i of set){
        set.delete(i)
        let pre = i-1
        let next = i+1
        while(set.has(pre)){
            set.delete(pre)
            pre--
        }
        while(set.has(next)){
            set.delete(next)
            next++
        }
        res =Math.max(res,next-pre-1)
    }
    return res
};