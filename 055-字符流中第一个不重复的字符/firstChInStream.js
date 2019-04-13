//Init module if you need

let charCount=Array(255).fill(0)
let str=[]

function Init(){
    // write code here
    str =[]
}
//Insert one char from stringstream
function Insert(ch){
   str.push(ch)
   charCount[ch.charCodeAt(0)]=charCount[ch.charCodeAt(0)]+1
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce(){
   for(let i=0;i<str.length;i++){
     if(charCount[str[i].charCodeAt(0)]===1){
       return str[i]
     }
   }
   return "#"
}


Init()
Insert('h')
console.log(FirstAppearingOnce())
Insert('e')
console.log(FirstAppearingOnce())
Insert('l')
console.log(FirstAppearingOnce())
Insert('l')
console.log(FirstAppearingOnce())
Insert('o')
console.log(FirstAppearingOnce())
Insert('w')
console.log(FirstAppearingOnce())
Insert('o')
console.log(FirstAppearingOnce())
Insert('r')
console.log(FirstAppearingOnce())
Insert('l')
console.log(FirstAppearingOnce())
Insert('d')
console.log(FirstAppearingOnce())