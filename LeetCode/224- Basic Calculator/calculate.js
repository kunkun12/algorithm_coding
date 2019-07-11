function calculate(s) {
  let res = 0;
  let stack = [];
  let sign = 1;
  let len = s.length;
  let ch;
  let num = 0;
  for (let i = 0; i < len; i++) {
    ch = s[i];
    if (/\d/.test(ch)) {
      num = 10 * num + parseInt(ch);
    } else if (ch === "+" || ch === "-") {
      res += sign * num;
      num = 0;
      sign = ch === "+" ? 1 : -1;
    } else if (ch === "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (ch === ")") {
      res += sign * num;
      num = 0;
      res *= stack.pop();
      res += stack.pop();
    }
  }
  res += sign * num;
  return res;
}
