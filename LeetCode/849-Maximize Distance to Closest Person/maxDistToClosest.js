/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let preOne=-1
    let res=-1
    let i=0
    while(i<seats.length){
        if(seats[i]===1){
            if(preOne==-1){
                res =i
            }else{
               res = Math.max(res,Math.floor((i-preOne)/2))
            }
            preOne =i
        }
        i++
    }
    return Math.max(res,seats.length-preOne-1)
};