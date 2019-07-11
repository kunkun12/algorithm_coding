/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length===0)return ''
  if(strs.length===1) return strs[0]
    for(let i =0;i<strs[0].length;i++){
      for(let j =1;j<strs.length;j++){
            if(i>strs[j].length||strs[0][i]!==strs[j][i])
            return strs[0].substring(0,i)
      }
    }
    return strs[0]
};