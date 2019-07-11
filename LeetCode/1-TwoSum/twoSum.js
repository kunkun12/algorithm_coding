/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var l= nums.length;
    let map ={}
    for(var i =0;i<l;i++){
        let target2Index = map[target-nums[i]]
        if(target2Index !=undefined){
            return [target2Index,i]
        }
        map[nums[i]]=i
       
    }
    return []
};