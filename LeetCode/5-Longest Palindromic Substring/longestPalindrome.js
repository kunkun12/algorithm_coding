var longestPalindrome = function(s) {
    if(s==='')return ''
    let len = s.length
    let left =0
    let right = 0
    let maxLength = 0
    let j
    let dp=[]
    for(let m=0;m<len;m++){
        dp[m] = new Array(len).fill(false)
    }
    for(let i=len-1;i>=0;i--){
        for( j=i;j<len;j++){
           if(j-i<=1){
               if(s[i]==s[j]){
                    dp[i][j] = true
                    let length = j-i+1
                    if(length>maxLength){
                        maxLength = length
                        left = i
                        right = j
                    }
               }
           }else{
               if(dp[i+1][j-1]&&(s[i]===s[j])){
                   dp[i][j]=true
                   let length = j-i+1
                   if(length>maxLength){
                       maxLength = length
                       left = i
                       right = j
                   }
               }
           }
        
        }
    }
   
    return s.slice(left,right+1)
};

console.log(longestPalindrome("cbbd"))