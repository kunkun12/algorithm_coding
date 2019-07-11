/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */



var exist = function(board, word) {
    let height = board.length
    let width = board[0].length
    let d=[[-1,0],[1,0],[0,1],[0,-1]];
    let visited = new Array(height);
    for(let j =0;j<height;j++){
      for(let i =0;i<width;i++){
        visited[j][i]=false
      }
    }
   
    function isInArea(x,y){
      return x>=0&&x<width&&y>=0&&y<height
    }
    function searchWord(board,word,index,startx,starty){
      if(index===word.length-1){
          return word[index]===board[starty][startx]
      }
      if(word[index]===board[starty][startx]){
        visited[startx][starty]=true
          for(let i =0;i<4;i++){
              let newx = startx+d[i][0]
              let newy=starty+d[i][1]
              if(isInArea(newx,newy)&&!visited[newx][newy]){
                  if(searchWord(board,word,index+1,newx,newy)){
                    return true
                  }
              }
          }
          visited[startx][starty]=true
      }

    }
    searchWord(board,word,0,0,0)
};

