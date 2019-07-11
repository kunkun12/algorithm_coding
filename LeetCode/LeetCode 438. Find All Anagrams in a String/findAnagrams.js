function findAnagrams(s, p) {
  let len = s.length;
  let plen = p.length;
  let countp = new Array(26).fill(0);
  let aIndex = "a".charCodeAt(0);
  for (let i = 0; i < plen; i++) {
    countp[p[i].charCodeAt(0) - aIndex]++;
  }

  let windowCount = new Array(26).fill(0);

  let res = [];
  /// let left =0;
  //let right = 0
  for (let j = 0; j < len; j++) {
    let index = s[j].charCodeAt(0) - aIndex;
    windowCount[index]++;
    if (j >=plen - 1) {
      let startIndex = s[j - plen+1].charCodeAt(0) - aIndex;
      let m = 0;
      for (; m < 26; m++) {
        if (countp[m] !== windowCount[m]) break;
      }
      console.log(windowCount)
      if (m === 26) {
        res.push(j - plen + 1);
      }
      windowCount[startIndex]--;
    }
  }
  console.log(res)
  return res;
}


findAnagrams("cbaebabacd",'abc')