function firstUniq(s){
  let countMap={}
  for(let i =0;i<s.length;i++){
      let ch = s[i]
      countMap[ch]=countMap[ch]?(countMap[ch]+1):1
  }
  for(let i =0;i<s.length;i++){
    let ch = s[i]
    if(countMap[ch]==1)return i
}
  return -1
}