/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len =digits.length
    let index=len-1
    let needAdd=false
    if(digits[index]===9)needAdd=true
    while(needAdd&&index>=0){
        if(digits[index]==9){
            needAdd=true
            digits[index]=0
        }else{
            needAdd=false
            break
        }
        index--
    }
    if(needAdd){
        digits.unshift(1)
    }else{
         digits[index]++
    }
   
    return digits
};