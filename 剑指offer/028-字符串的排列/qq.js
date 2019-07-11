function qq(string) {
    let len = string.length
    let res = []
    let res2 = []
    for (j=len-1; j >= 0; j--) {
        if (j == len -1) {
            res.push(string.slice(j))
        } else {
            let temp = res.shift()
            let l = temp.length
            let letter = string[j]
            for (;  temp; temp = res.shift()) {
            let arr = temp.split('')
                for (let n=0; n<=l; n++) {
                    res2.push(insert(arr.slice(), letter, n))
                }
            }
            res = res2.slice()
            res2 = []
        }
    }
    console.log(res, res.length)
}

function insert(arr, letter, n) {
    arr.splice(n, 0, letter)
    return arr.join('')
}

qq('abcd')
