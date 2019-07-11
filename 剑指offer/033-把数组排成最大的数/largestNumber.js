function largestNumer(nums){
    let res = nums.sort(compare).reverse()
     let resString=res.join('')
    // 去除前面的0
     let isZero=true
     let i=0
     while(i<resString.length&&resString[i]==='0'){
         i++
     }
     if(i===resString.length) return '0'
        return resString.substring(i)
}
function compare(a,b){
    let s1 = a+''+b
    let s2 = b+''+a
    let i = 0
    //return s1>s2
    while(i<s1.length){
        if(s1[i]>s2[i]){
            return 1
        }else if(s1[i]<s2[i]){
            return -1
        }
        i++
    }
    return 0
}