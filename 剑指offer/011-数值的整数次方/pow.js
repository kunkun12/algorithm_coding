function pow(x,n){
    if(x===0||x===1){
        return 1
    }
    if(n===1){
        return x
    }
    let isnegtive = false
    if(n<0){
        n=-n
        isnegtive =true
    }
  
    let res = 1
    let temp = x
    while(n){
        if(n&1){
            res=res*temp
        }
        temp*=temp
        n=n>>1
    }
    if(isnegtive){
        res= 1/res
    }
    return res
}

console.log(pow(2,-2))