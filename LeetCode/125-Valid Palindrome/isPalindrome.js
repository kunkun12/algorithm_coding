var isPalindrome = function(s) {
    let i = 0
    let j =s.length-1
    while(i<j){
        while(!/[a-zA-Z\d]/.test(s[i])){
            i++
        }
          while(!/[a-zA-Z\d]/.test(s[j])){
            j--
        }
        if(i>j) return true
        if(s[i].toLowerCase()!==s[j].toLowerCase()){
            return false
        }
        i++
        j--
    }   
    return true
};