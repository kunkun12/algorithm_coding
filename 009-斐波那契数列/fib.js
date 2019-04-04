
var fib = function(N) {
    if(N<2){
      return N
  }
  return fib(N-1)+fib(N-2)
};


function fib2(N){
    if(N<2)return N
    let fib1 = 0
    let fib2 = 1
    let total
    let n =2
    while (n++<N+1) {
        total = fib1+fib2
        fib1 = fib2
        fib2=total
    }
    return total
}