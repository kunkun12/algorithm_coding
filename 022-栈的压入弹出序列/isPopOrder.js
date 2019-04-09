function isPopOrder(pushV,popV){
    if(pushV.length===0||popV.length ===0 )return false
    let helperStack = []

    while(true){
        if(helperStack.length==0){
            helperStack.push(pushV.shift())
        }
        while(helperStack.length&&helperStack[helperStack.length-1]===popV[0]){
            helperStack.pop()
            popV.shift()
        }
        if(pushV.length){
            helperStack.push(pushV.shift())
        }else{
            break
        }
    }
    if(helperStack.length ===0){
        return true
    }else{
        return false
    }
}





let r=isPopOrder([1,2,3,4,5],[4,3,5,1,2])
console.log(r)


