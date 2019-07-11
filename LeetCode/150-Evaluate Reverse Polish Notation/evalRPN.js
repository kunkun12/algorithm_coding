var evalRPN = function(tokens) {
    var evalRPN = function(tokens) {
        if(tokens==='') return 0
       let a, b;
       let stack = []
       let res
       tokens.forEach(i => {
           if(i==='+'){
                b=stack.pop()
                a = stack.pop()
               stack.push(a+b)
           }else if(i==='-'){
               b=stack.pop()
               a = stack.pop()
              stack.push(a-b)
           }else if(i==='*'){
               b=stack.pop()
               a = stack.pop()
              stack.push(a*b)
           }else if(i==='/'){
               b=stack.pop()
               a = stack.pop()
              
              stack.push(parseInt(a/b))
           }else{
              // console.log(i)
               stack.push(parseInt(i))
           }
       });
      
       return stack.pop()
   };
};