function numSquares(n){
    let queue =[]
    queue.unshift([n,0])
    let visited = new Array(n+1).fill(false)
    visited[n]=true
    let top
    while(queue.length){
        top = queue.pop()
        let num = top[0]
        let step = top[1]
        if(num===0)return step
        for(let i=1;num>=i*i;i++){
            if(!visited[num-i*i]){
                queue.unshift([num-i*i,step+1])
                visited[num-i*i]=true
            }
        }
    }
}

function numSquaresDP(){
  var dp_arr = new Array(n + 1).fill(0);

    dp_arr[1] = 1;  // 1
    dp_arr[2] = 2;  // 1 + 1
    var i, j;
    for(i = 3; i <= n; i++) {
        var min = Number.MAX_SAFE_INTEGER;
        for(j = 1; j <= i; j++) {
            var power = Math.pow(j, 2);
            if(power <= i) {
                min = Math.min(min, dp_arr[i - Math.pow(j, 2)]);
            }
        }
        dp_arr[i] = min + 1;
    }
    console.log(dp_arr);
    return dp_arr[n];
}

