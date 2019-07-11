function isMatch(s,p){
    if(s===''&&p===''){
        return true
    }
    if(s!==''&&p==''){
        return false
    }
    if(p[1]!='*'){
        if(s[0]===p[0]||(s!=''&&p[0]==='.')){
            return isMatch(s.slice(1),p.slice(1))
        }else{
            return false
        }
    }else{
        if(s[0]===p[0]||(s!==''&&p[0]==='.')){
            return isMatch(s.slice(1),p)||isMatch(s,p.slice(2))
        }else{
            return isMatch(s,p.slice(2))
        }
    }
}
