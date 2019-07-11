function lengthOfLongestSubstring(s){
  let count=new Array(256).fill(0)
  let len=s.length
  let start = 0
  let end = 0
  let res = 0
  while(start<=end&&end<len){
     // chars[s[right].charCodeAt(0)]++
     let endIndex = s[end].charCodeAt(0)
     let startIndex = s[start].charCodeAt(0)
      if(count[endIndex]===0){
          count[endIndex]++
          end++
      }else{
          count[startIndex]--
          start++
      }
      res = Math.max(res,end-start+1)
  }
  return res
}