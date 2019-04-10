function nthUglyNumber(n){
    let index2=0
    let index3=0
    let index5=0
    let index=0
    while(index<n){
        let val = Math.min(ugly[index2]*2,ugly[index3]*3,ugly[index5]*5)
        if (val == ugly[index2] * 2) {
            ++index2;
        }
        if (val == ugly[index3] * 3) {
            ++index3;
        }
        if (val == ugly[index5] * 5){
            ++index5;
        }

        ugly[++index] = val;
    }
    let result = ugly[n - 1];
    return result;
}