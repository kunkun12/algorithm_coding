function triangle(n){
  let res =[]
  for(let i =0;i<n;i++){
      res[i]=[]
      res[i][0]=1
      if(i>0){
        res[i][i]=1
      }
  }
  // 
  for(let j=2;j<n;j++){
      for(let m=1;m<j;m++){
        res[j][m]=res[j-1][m]+res[j-1][m-1]
      }
  }
  return res
}




function triangleII(rowIndex){
  if(rowIndex==0) return [1]
  let res =[1,1]
for(let i=2;i<=rowIndex;i++){
   for(let j=i;j>=0;j--){
     if(j==0||j==i){
       res[j]=1
     }else{
       res[j]=res[j]+res[j-1]
     }
   }
}
return res
}
console.log(triangleII(5))