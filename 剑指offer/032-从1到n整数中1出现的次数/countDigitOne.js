// 
function countDigitOne(n) {
  function countOne(n) {
    let count = 0;

    while (n != 0) {
      if (n % 10 === 1) {
        count++;
      }
      n = (n - (n % 10)) / 10;
    }
    return count;
  }

  let count = 0;
  for (let i = 1; i <= n; i++) {
    count += countOne(n);
  }
  return count;
}
