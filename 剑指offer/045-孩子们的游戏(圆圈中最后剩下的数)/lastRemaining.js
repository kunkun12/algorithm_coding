function lastRemaining(n, m){
    let queue=[]
    let num =0
    while(num<n){
        queue[num]=num
        num++
    }
    let count=0
    while(queue.length!=1){
        let first = queue.shift()
        if(count===m-1){
            queue.push(first)
            count = 0
        }else{
            count ++
        }     
        
    }
    return queue[0]
}
console.log(lastRemaining2(200200,5))

function lastRemaining2(n,m){
    let nums=Array(n).fill(0)
    let count =n
    let i =0
    let step=0
    while(count>0){
        if(nums[i]==-1){
            i++
            if(i===n){
                i=0
            }
            continue
        }
        if(step==m-1){
            step=0
            nums[i]=-1
            count--
        }else{
            step++
        }
        i++
        if(i==n){
            i=0
        }
    }
    return i-1
}
