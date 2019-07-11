// https://www.cnblogs.com/logosG/p/7979690.html
function trap(height){
    let leftMax=[]
    let rightMax=[]
    let len = height.length
    leftMax[0]=0
    rightMax[len-1]=0
    for(let i =1;i<len;i++){
        if(i==1){
            leftMax[1]=height[0]
            rightMax[len-2]=height[len-1]
        }else{
            leftMax[i]=Math.max(leftMax[i-1],height[i-1])
            rightMax[len-i-1]=Math.max(rightMax[len-i],height[len-i])
        }
      
    }
    let res=0
    for(let i =1;i<len;i++){
        if(height[i]<leftMax[i]&&height[i]<rightMax[i]){
            res+=Math.min(leftMax[i],rightMax[i])-height[i]
        }
    }
    return res
}