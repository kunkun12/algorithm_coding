[Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)



Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example 1:

Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
Return true.

Example 2:

Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
Return false.


#递归法
-------

根据平衡二叉树的定义

平衡二叉树要求对于每一个节点来说，它的左右子树的高度之差不能超过1

因此我们递归的判断每一个根节点，判断左右子树的高度差

##递归得到二叉树的深度
-------

