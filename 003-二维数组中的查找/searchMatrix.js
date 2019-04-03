
/**
 * Example 1:
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
 */
function searchMatrix(matrix,target){
    if(matrix.length==0) return false
        let row = matrix.length
        let col = matrix[0].length
        let i = 0
        let j = col-1
        while(i<row&&j>=0){
            if(matrix[i][j]<target){
                i++
            }else if(matrix[i][j]>target){
                j--
            }else{
                return true
            }
        }
        return false
}