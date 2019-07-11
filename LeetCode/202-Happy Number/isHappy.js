function isHappy(n){
    let set=new Set()
    let temp,sum
    while(n!=1){
        let sum =0
        while(n){
            temp = n%10
            sum+=Math.pow(temp,2)
            n=(n-temp)/10
        }
        n=sum
        if(set.has(n))break
        set.add(n)
    }
    return n===1
}