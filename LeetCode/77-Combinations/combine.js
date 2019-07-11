/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  _dfs(res, n, 1, k, []);
  return res;
};

function _dfs(res, n, num, k, temp) {
  if (temp.length === k) {
    res.push([...temp]);
  } else {
    for (let i = num; i <= n; i++) {
      temp.push(i);
      _dfs(res, n, i + 1, k, temp);
      temp.pop();
    }
  }
}
