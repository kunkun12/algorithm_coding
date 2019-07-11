/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if(numRows<=1) return s
 let res =''
 let size = 2*numRows-2
 for(let i =0;i<numRows;i++){
     for(let j=i;j<s.length;j+=size){
         res+=s[j]
         let tmp= j+size-2*i
         if(i>0&&i<numRows-1&&tmp<s.length){
           res+=s[tmp]
         }
     }
 }  
 return res
};
// class Solution {
//   public:
//       string convert(string s, int nRows) {
//           if (nRows <= 1) return s;
//           string res = "";
//           int size = 2 * nRows - 2;
//           for (int i = 0; i < nRows; ++i) {
//               for (int j = i; j < s.size(); j += size) {
//                   res += s[j];
//                   int tmp = j + size - 2 * i;
//                   if (i != 0 && i != nRows - 1 && tmp < s.size()) res += s[tmp];
//               }
//           }
//           return res;
//       }
//   };