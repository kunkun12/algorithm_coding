function zigzagLevelOrder(root) {
  if (root == null) return []
  let queue = [root]
  let res = []
  let level = 0
  let top
  while (queue.length) {
    let size = queue.length
    res.push([])
    while (size--) {
      if (level % 2) {
        top = queue.pop()
        if (top.right) {
          queue.unshift(top.right)
        }
        if (top.left) {
          queue.unshift(top.left)
        }
      } else {
        top = queue.shift()
        if (top.left) {
          queue.push(top.left)
        }
        if (top.right) {
          queue.push(top.right)
        }
      }
      res[level].push(top.val)
    }
    level++
  }
  return res

}
