/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    if(m==0)return false
   let n = matrix[0].length
   let left = 0
   let right = m*n-1
   let mid 
   let x ,y
   while(left<=right){
        mid = Math.floor((left+right)/2)
       x=Math.floor(mid/n)
       y = mid%n
       if(matrix[x][y]<target){
               left = mid+1
       }else if(matrix[x][y]>target){
               right =mid-1
       }else{
           return true
       }
   }   
   return false
};