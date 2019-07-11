// 回溯法
function partition(s){
    let res =[]

    function dfs(s,temp,start){
        if(left===s.length){
            res.push([...temp])
        }
        for(let i=start;i<s.length;i++){
            if(isPalindroom(s,start,i)){
                temp.push(s.slice(start,i+1))
                dfs(s,temp,i+1)
                temp.pop()
            }
        }
    }

    dfs(s,[],0)
    return res
}

function isPalindroom(s,left,right){
    while(left<right&&s[left]===s[right]){
        left++
        right--
    }
    return left>=right
}