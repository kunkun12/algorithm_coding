function validNumber(s) {
  let i = 0;  //当前的字符指针
  while (s[i] === " ")i++;
  if (s[i] === "+" || s[i] === "-") i++;
  let countPt = 0; //小数点的个数
  let countNum = 0; //数字的个数
  while (i < s.length) {
    if (/\d/.test(s[i])) {
      countNum++;
    } else if (s[i] === ".") {
      countPt++;
    } else {
      break;
    }
    i++;
  }
  // 小数点最多一个 数字至少一个 否则返回false
  if (countPt > 1 || countNum < 1) return false

  if (s[i] == "e" || s[i] === "E") {
    i++;
    if (s[i] === "+" || s[i] === "-") i++;
    let countNum = 0;
    while (i < s.length) {
      if (/\d/.test(s[i])) {
        i++
        countNum++;
      } else {
        break;
      }
    }
    if(countNum<1)return false
  }
  while(i<s.length){
      if(s[i]===' '){
          i++
      }else{
          break
      }
  }
  return i===s.length
}

console.log(validNumber("53.5e93"))
console.log(validNumber("0"))
console.log(validNumber(" 0.1 "))
console.log(validNumber("abc"))
console.log(validNumber("1 a"))
console.log(validNumber(" 1e"))
console.log(validNumber("95a54e53"))
console.log(validNumber(" -90e3   "))
console.log(validNumber("53.5e93"))
console.log(validNumber(" 6e-1"))