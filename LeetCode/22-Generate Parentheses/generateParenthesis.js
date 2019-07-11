function generateParenthesis(n){
  let res=[]
  function _dfs(left,right,s){
    if(left<0||right<0||left>right)return
      if(left===0&&right===0){
        res.push(s)
      }else{
          _dfs(left-1,right,s+'(')
          _dfs(left,right-1,s+')')
      }
  }
  _dfs(n,n,'')
return  res
}
console.log(generateParenthesis(3))