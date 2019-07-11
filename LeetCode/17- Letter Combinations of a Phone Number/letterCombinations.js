function letterCombinations(digits){
    let map =['abc',"def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    function _cominations(digits){
        let len = digits.length
        if(len===0)return []
        if(len===1){
            let index = parseInt(digits)-2
            return map[index].split('')
        }
        let last = map[parseInt(digits[0])-2]
        let remain = digits.slice(1)
        let remainAarray = _cominations(remain)
        let res = []
        for(let i =0;i<last.length;i++){
            for(let j =0;j<remainAarray.length;j++){
                res.push(last[i]+b[j])
            }
        }
        return res
    }
    return _cominations(digits)
}
