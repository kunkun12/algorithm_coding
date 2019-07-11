function sum(n){
    return n&&(n+sum(n-1))
}


console.log(sum(3))
