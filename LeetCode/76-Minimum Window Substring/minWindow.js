/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let countMap = new Map();
  for (let i = 0; i < t.length; i++) {
    let count = countMap.get(t[i]) || 0;
    countMap.set(t[i], count + 1);
  }
  let cnt = 0,
    left = 0,
    min_len = Number.MAX_SAFE_INTEGER;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let count = countMap.get(s[i]) || 0;
    count--;
    countMap.set(s[i], count);
    if (count >= 0) ++cnt;
    while (cnt === t.length) {
      if (min_len > i - left + 1) {
        min_len = i - left + 1;
        res = s.substr(left, min_len);
      }
      countMap.set(s[left], countMap.get(s[left]) + 1);
      if (countMap.get(s[left]) > 0) --cnt;
      ++left;
    }
  }
  return res;
};
