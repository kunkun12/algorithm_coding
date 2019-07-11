function spiralMatrix(matrix){
    let row = matrix.length
    if(row==0)return []
    let col = matrix[0].length
    let rowMin=0,colMin=0,rowMax =row-1,colMax=col-1
    let count = 0;max_count = row*col
    let res = []
    while(count<max_count){
        for(let i = colMin;i<=colMax;i++){
            res[count++]=matrix[rowMin][i]
        }
        if(count == size) break; 
        for(let i =rowMin+1;i<=rowMax;i++ ){
            res[count++]=matrix[i][colMax]
        }
        if(count == size) break; 
        for(let i =colMax-1;i>=colMin;i-- ){
            res[count++]=matrix[rowMax][i]
        }
       for(let i = rowMax-1;i>rowMin;i--){
        res[count++]=matrix[i][colMin]
       }

      rowMin++
      rowMax--
      colMax--
      colMin++
    }
    return res
}