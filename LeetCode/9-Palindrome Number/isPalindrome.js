/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let start=0;
   
    if(x<0)return false;
    x = ''+x
     let end = x.length-1;
    while(end>start){
        if(x[end]!==x[start]){
            return false
        }
        start++;
        end--;
    } 
    return true
};