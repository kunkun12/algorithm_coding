function printNumber(N){
    let array = Array(N).fill(0)
    let isEnd=false
    array[N-1]=1
    function addOne(){
        let needAdd=1
        for(let i=N-1;i>=0;i--){
            if(array[i]>=9){
                if(i==0) {
                    isEnd=true
                    break
                }
                if(needAdd){
                    array[i]=0
                    needAdd =1
                }else{
                    break
                }
            }else{
                if(needAdd){
                    array[i] = array[i]+1
                    //if()
                }
                break
            }
        }
    }

    function print(){
            console.log(array)
    }

  while(!isEnd){
    print()
    addOne()
  }
}



printNumber(2)