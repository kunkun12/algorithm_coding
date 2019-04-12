function atoi(str) {
  let length = str.length;
  let num = 0;
  let i = 0;
  let res = 0;
  let j = 0
  let isNegtive = false;

  while (i < length && str[i] === ' ') {
    i++
  }
  if (str[i] === '-' || str[i] === '+') {
    if (str[i] === '-')
      isNegtive = true;
    i = i + 1
  }
  let sign = isNegtive ? -1 : 1;
  while (i < length && str[i] === '0') {
    i++
  }
  for (j = i; j < length; j++) {
    if (str[j] >= '0' && str[j] <= '9') {
      let current = parseInt(str[j])
      if (isNegtive) {
        if (res > 214748364 || (res === 214748364 && current > 8))
          return -2147483648
      } else {
        if (res > 214748364 || (res === 214748364 && current > 7))
          return 2147483647
      }
      res = res * 10 + current
    } else {
      break;
    }
  }

  return sign * res
}
