/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while(b){
        let x = a^b
        let y = (a&b)<<1
        a=x
        b=y
    }
    return a
};