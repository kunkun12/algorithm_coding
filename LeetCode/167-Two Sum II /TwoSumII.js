var twoSum = function(numbers, target) {
  let index1=1;
let index2 =numbers.length 
while(index1<index2){
 if((numbers[index1-1]+numbers[index2-1])>target){
    index2--
 }else if((numbers[index1-1]+numbers[index2-1])<target){
  index1++
 }else{
   return [index1,index2]
 }
}
};

console.log(twoSum([2,7,11,15],9))