// 邻接矩阵
class DenseGraph{
    constructor(n,isDrected){
         this.g = []
         this._vcount=n;
         this._ecount=0
         this.isDrected=isDrected
          for(let i =0;i<n;i++){
              this.g.push(Array(n).fill(0))
          }  
    }
   get Vcount(){
        return this._vcount
    }
    get  Ecount(){
        return this._ecount
    }
    addEge(a,b){
        if(this.hasEdge(a,b)&&a!==b){
            this.g[a][b]=1
            this.ecount++
            if(!this.isDrected){
                this.g[b][a]=1
            }
        }
    }
    showPath(){
        let Vcount=this.Vcount;
        for(let i =0;i<Vcount;i++){
            let s=''
            for(let j=0;j<Vcount;j++){
                s+=this.g[i][j]+'    '
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

