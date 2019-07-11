
 //Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) return "#";
  let res = root.val.toString();
  res += "," + serialize(root.left);
  res += "," + serialize(root.right);
  return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let list = data.split(",");
  function _deserialize() {
      let head
      if(list.length==0) return null
        let  val = list.shift()
        if(val=='#'){
            return null
        }else{
          head = new TreeNode(val)
            head.left=_deserialize()
            head.right=_deserialize()
        }
        return head
  }
  return _deserialize()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


 // 测试代码
 let root = new TreeNode(1)
 root.left = new TreeNode(2)
 root.right=new TreeNode(3)

 root.right.left = new TreeNode(4)
 root.right.right = new TreeNode(5)


 console.log(serialize(root))
 console.log(printBinaryTree(deserialize(serialize(root))))

 function printBinaryTree(root){
     if(root===null) return ''
     let str=root.val.toString()
        str+=printBinaryTree(root.left)
        str+=printBinaryTree(root.right)
      return str
 }