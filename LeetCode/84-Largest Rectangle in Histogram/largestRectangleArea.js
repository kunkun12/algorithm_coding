function largestRectangleArea(heights) {
  heights.push(-1);
  let res = 0;
  let stack = [];
  let len = heights.length;
  let i = 0;
  while (i < len) {
    if (stack.length == 0 || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
      i++;
    } else {
      let top = stack.pop();
      let area = 0;
      if (stack.length == 0) {
        area = heights[top] * i;
      } else {
        area = heights[top] * (i - stack[stack.length - 1] - 1);
      }
      res = Math.max(area, res);
    }
  }
  return res;
}
