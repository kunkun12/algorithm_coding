// 解法1 排序 之后中间的那个元素 时间复杂度 n*lgn
// 解法2 统计每个字符出现的个数 借用hash 来记录次数 时间复杂度N 空间复杂度N




// 本解法 遍历数组，如果跟上一个
function majorityElement(nums){
    let ch=''
    let count=0
    nums.forEach(i => {
        if(ch===i){
            count++
        }else{
            count--
            if(count===0){
                ch=i
            }
        }
    });
    return i
}