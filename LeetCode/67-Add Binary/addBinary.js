/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let len1 = a.length
  let len2 = b.length
  let len = Math.max(len1,len2)
  let i =0;
  let carray=0
  let res = ''
  while(i<len){
      let char1 ='0'
      let char2 = '0'
      if(i<len1){
           char1 = a[len1-i-1]
      } 
      if(i<len2){
          char2 = b[len2-i-1]
      }
      let sum = parseInt(char1)+parseInt(char2)+carray
      if(sum>=2){
          carray =1
      }else{
          carray= 0
      }
      res = sum%2+''+res
      i++
  }
  if(carray==1) res = '1'+res

  return res
};