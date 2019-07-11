var SparseGraph = require('./SparseGraph')
var {readGraph} = require('./ReadGraph')


   
  
 // 未连通图 求连通分量
function dfs(g){
        let visited=Array(g.Vcount).fill(false)
        let cCount=0 //;连同分量
        let ids=Array(g.Vcount).fill(-1)
      function _dfs(i){
        let iterator = g.iterator(i);
        let item ;
        visited[i]=true
        //console.log(i)
        ids[i]=cCount //存储元素所在第几个联通分量，如果ids[a]===ids[b] 那么a b联通
        while((item=iterator.next())&&!item.done){
            let k=item.value
            if(!visited[k]){
                _dfs(k)
            }
        }
      }
      for(var i =0;i<g.Vcount;i++){
          if(!visited[i]){
              _dfs(i)
              cCount++
          }
      }
      console.log(cCount)
}


// 连通图 DFS 

function dfs2(g,start){
    let visited = Array(g.Vcount).fill(false)
    visited[start]=true
    function _dfs(i){
            let iterator = g.iterator(i)
            let item ;
            while((item=iterator.next())&&!item.done){
                if(!visited[item.value]){
                        visited[item.value]=true
                        _dfs(item.value)
                }
            }
    }
}


// 测试代码
var g1 = new SparseGraph(13,false)
var g2 = new SparseGraph(7,false)
readGraph('G1.txt',g1,false).then(()=>dfs(g1))
readGraph('G2.txt',g2,false).then(()=>dfs(g2))