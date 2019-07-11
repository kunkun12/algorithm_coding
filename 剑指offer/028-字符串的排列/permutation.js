function swap(array,a,b){
    let temp = array[a]
    array[a]=array[b]
    array[b]=temp
}
function permutation(array,start,len){
    if(start==len){
        console.log(array)
    }else{
        for(var i=start;i<len;i++){
            swap(array,start,i)
            permutation(array,start+1,len)
            swap(array,start,i)
        }
    }
}


permutation([1,2,3,4,5],0,5)
