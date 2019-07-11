var {readGraph} = require('./ReadGraph')
class Edge{
    constructor (m,n,weight) {
        this.m = m;
        this.n=n ;
        this.weight = weight
    }
 get   p1(){
        return this.m;
    }
 get    p2(){
      return this.n
    }
    get w(){
        return this.weight
    }
    other(x){
        return x===this.m?this.n:this.m
    }
    valueOf(){
        return this.weight
    }
}

// 邻接矩阵
class WeightDenseGraph{
    constructor(n,isDrected){
         this.g = []
         this._vcount=n;
         this._ecount=0
         this.isDrected=isDrected
          for(let i =0;i<n;i++){
              this.g.push(Array(n).fill(null))
          }  
    }
   get Vcount(){
        return this._vcount
    }
    get  Ecount(){
        return this._ecount
    }
    addEge(a,b,w){
        if(a!==b){
            this.g[a][b]=new Edge(a,b,w)
            if(!this.isDrected){
                this.g[b][a]=new Edge(b,a,w)
            }
            this.ecount++
        }
    }
    showPath(){
        let Vcount=this.Vcount;
        console.log(Vcount)
        for(let i =0;i<Vcount;i++){
            let s=''
            for(let j=0;j<Vcount;j++){
                s+=(this.g[i][j]?this.g[i][j].w:'NULL')+'    '
            }
            console.log(s)
        }
    }
      // 迭代在这个图中和这个顶点向连的所有边
      iterator(v){
        let i=0;
        return {
            next(){
                let g=this.g
                for(;i<g.Vcount;i++){
                    return g[v][i]?{value:g[v][i],done:false}:{done:true}
                }
            }
        }
    }
    hasEdge(a,b){
        return this.g[a][b]!==0
    }
}


module.exports = WeightDenseGraph

//测试代码
//var graph = new WeightDenseGraph(8,false)

//readGraph('WG1.txt',graph,true).then(()=>(graph.showPath()))
