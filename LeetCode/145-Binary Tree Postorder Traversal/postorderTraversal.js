function postorderTraversal(root){
    let res =[]
    if(root==null) return res
    let stack = []
    let p,lastNode
    p=root
    lastNode =null
    while(p){
        stack.push(p)
        p = p.left
    }
    while(stack.length){
        p = stack.pop()
        if(p.right===null||p.right==lastNode){
            res.push(p.val)
            lastNode = p
        }else{
            stack.push(p)
            p = p.right
            while(p){
                stack.push(p)
                p=p.left
            }
        }
    }
    return res
}

function postOrderTraversal2(root){
    let res = []
    let stack = []
    let p = root
    while(p){
        res.unshift(p.val)
        if(p.left){
            stack.push(p.left)
        }
        if(p.right){
            stack.push(p.right)
        }
        p = stack.pop()
    }
    return res
}


/**
 * public List<Integer> postorderTraversal(TreeNode root) {
	LinkedList<Integer> ans = new LinkedList<>();
	Stack<TreeNode> stack = new Stack<>();
	if (root == null) return ans;
	
	stack.push(root);
	while (!stack.isEmpty()) {
		TreeNode cur = stack.pop();
		ans.addFirst(cur.val);
		if (cur.left != null) {
			stack.push(cur.left);
		}
		if (cur.right != null) {
			stack.push(cur.right);
		} 
	}
	return ans;
}
 */
// https://leetcode.com/problems/binary-tree-postorder-traversal/discuss/45551/Preorder-Inorder-and-Postorder-Iteratively-Summarization