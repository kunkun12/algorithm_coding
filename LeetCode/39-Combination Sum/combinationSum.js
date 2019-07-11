/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [] 
    let temp =[]
    _combinationSum(candidates,target,0,res,temp)
  return res
};

function sum(array){
  return array.reduce((sum,i)=>i+sum,0)
}
function _combinationSum(candidates,target,n,res,temp){
  if(sum(temp)===target){
      res.push([...temp])
  }
  if(sum(temp)>target)return 
  for(let i=n;i<candidates.length;i++){
      temp.push(candidates[i])
      _combinationSum(candidates,target,i,res,temp)
      temp.pop()
  }
}