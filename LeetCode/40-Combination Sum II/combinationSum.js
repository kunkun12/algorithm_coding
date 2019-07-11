
var combinationSum2 = function(candidates, target) {
  let res = [] 
     let temp =[]
     _combinationSum(candidates.sort((a,b)=>a-b),target,0,res,temp)
   return res 
};


function sum(array){
   return array.reduce((sum,i)=>i+sum,0)
}
function _combinationSum(candidates,target,n,res,temp){
   let s = sum(temp)
   if(s===target){
       res.push([...temp])
   }
   if(s>target)return 
   for(let i=n;i<candidates.length;i++){
       if(i>n&&candidates[i]==candidates[i-1]) continue;
       temp.push(candidates[i])
       _combinationSum(candidates,target,i+1,res,temp)
       temp.pop()
   }
}