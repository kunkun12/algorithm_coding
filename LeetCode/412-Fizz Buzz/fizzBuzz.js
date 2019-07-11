/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    
    let a =1
    let i =1
    let res =[]
    while(i<=n){
        if(a===3||a===6||a===9||a===12){
            res.push('Fizz')
        }else if(a===5||a==10){
            res.push('Buzz')
        }else if(a===15){
            res.push('FizzBuzz')
            a=0
        }else{
            res.push(i+'')
        }
        i++
        a++
    }
    return res
};