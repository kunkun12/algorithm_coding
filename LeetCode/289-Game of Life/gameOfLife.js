/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = [[1,1],[1,0],[1,-1],[0,1],[0,-1],[-1,1],[-1,0],[-1,-1]];
    let h = board.length
    let w =board[0].length
    for(let i =0;i<h;i++){
        for(let j=0;j<w;j++){
            let count =0
            for(let k=0;k<8;k++){
                let x = i+m[k][0]
                let y=j+m[k][1]
                if(x>=0&&x<h&&y>=0&&y<w){
                    if(board[x][y]==1||board[x][y]==2)count++
                }
            }
            if(board[i][j]&&(count<2||count>3)){
                board[i][j]=2
            }else if(!board[i][j] && count===3){
                board[i][j]=3
            }
        }
    }
    for(let i=0;i<h;i++){
        for(let j=0;j<w;j++){
            board[i][j]=board[i][j]%2
        }
    }
};