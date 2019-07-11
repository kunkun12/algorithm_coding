 function fourSumCount(A, B, C, D) {
     let map2Sum = {}
     let res = 0
     let len = A.length
    for(let i =0;i<len;i++){
        for(let j =0;j<len;j++){
            let key = A[i]+B[j]
            if(!map2Sum[key]){
                map2Sum[key] = 1
            }else{
                map2Sum[key]++
            }
        }
    }
   
    for(let m =0;m<len;m++){
        for(let n = 0;n<len;n++){
            let key = 0-(C[m]+D[n])
            if(map2Sum[key]){
                res+=map2Sum[key]
            }
        }
    }
    return res
};

console.log(fourSumCount([1,2],[-2,-1],[-1,2],[0,2]))