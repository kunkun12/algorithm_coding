/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length
  if(m===0)return false
  let n = matrix[0].length
 let i =n-1
 let j=0
 while(i>=0&&j<m){
    if(matrix[j][i]>target){
        i--
     }else if(matrix[j][i]<target){
        j++
     }else{
         return true
     }
 }
 
 return false
};