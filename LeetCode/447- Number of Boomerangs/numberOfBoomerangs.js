function numberOfBoomerangs(points){
    let res = 0
    let len = points.length

    for(let i =0;i<len;i++){
        let map = {}
        let pt0 = points[i]
        for(let j = 0;j<len;j++){
            let pt1 =points[j]
            let distance = (pt1[0]-pt0[0])*(pt1[0]-pt0[0])+(pt1[1]-pt0[1])*(pt1[1]-pt0[1])
            if(map[distance]){
               map[distance]++ 
            }else{
                map[distance]=1
            }
        }
        Object.values(map).forEach((i)=>{
            if(i>1){
                res+=i*(i-1)
            }
        })
    }
    return res
}