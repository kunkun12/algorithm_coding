
function bitAdd(a,b){
  if(a===0) return b
  if(b===0) return a
  let sum = 0
  let carry = 0
  while(b!=0){
    sum=a^b
    carry=(a&b)<<1
    a=sum
    b=carry
  }
  return sum
}

console.log(bitAdd(5,3))
