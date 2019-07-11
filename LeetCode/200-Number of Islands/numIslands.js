/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length===0 || grid[0].length===0) return 0
    let row = grid.length
    let col = grid[0].length
    let visited = Array(row).fill(0).map(()=>Array(col).fill(false))
    let count =0
    let i,j
    for(i =0;i<row;i++){
        for(j =0;j<col;j++){
            if(grid[i][j]==='0'||visited[i][j])continue
            helper(grid,visited,i,j)
            count++
        }
    }
    return count
};


function helper(grid,visited,x,y){
    if(x<0||x>=grid.length||y<0||y>=grid[0].length||visited[x][y]||grid[x][y] == '0') return
    visited[x][y]=true
    helper(grid,visited,x-1,y)
    helper(grid,visited,x+1,y)
    helper(grid,visited,x,y+1)
    helper(grid,visited,x,y-1)
}