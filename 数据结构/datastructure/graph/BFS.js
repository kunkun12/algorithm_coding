var SparseGraph = require('./SparseGraph')
var {readGraph} = require('./ReadGraph')
var Queue = require('../queue')

   
  

function bfs(g,s){
        let visited=Array(g.Vcount).fill(false)
        let from=Array(g.Vcount).fill(-1)
      
        let q= new Queue()
        q.enQueue(s)
        visited[s]=true
        while(!q.isEmpty){
            let current = q.deQueue()
            let iterator = g.iterator(current)
            let item 
            while((item=iterator.next())&&(!item.done)){
                let p = item.value 
                if(!visited[p]){
                    visited[p]=true
                    console.log(p)
                    q.enQueue(p)
                    from[p]=current
                }
            }
        }
}


// 测试代码
let  g2 = new SparseGraph(7,false)
readGraph('G2.txt',g2,false).then(()=>bfs(g2,0))
