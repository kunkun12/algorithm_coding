function invertTree(root) {
  if (root === null) return null
  let temp = root.left
  root.left = invertTree(root.right)
  root.right = invertTree(temp)
  return root
}