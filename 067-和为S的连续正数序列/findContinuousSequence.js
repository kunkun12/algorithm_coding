function findContinuousSequence(sum){
    let res=[]
    let start = 1
    let end = 2
    while(start<sum/2&&start<end){
        let curSum = (start+end)*(end-start+1)/2
        if(curSum==sum){
            let array=[]
            for(let i = start;i<=end;i++){
                array.push(i)
            }
            res.push(array)
            start++
        }else if(curSum>sum){
            start++
        }else{
            end++
        }
    }
    return res
}