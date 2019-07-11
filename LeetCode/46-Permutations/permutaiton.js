/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = []
    permutation(nums,0,nums.length,res)
    return res
};
function swap(nums,a,b){
    let t = nums[a]
    nums[a]=nums[b]
    nums[b]=t
}
function permutation(nums,start,end,res){
  if(start===end){
      res.push([...nums])
  }else{
    for(let i = start;i<end;i++){
        swap(nums,i,start)
        permutation(nums,start+1,end,res)
        swap(nums,i,start)
    }
  }
}