[LeetCode 153 Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/)

题目描述


>把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个非递减序列的一个旋转，输出旋转数组的最小元素。

例如
>数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
>
>该数组的最小值为1。


1、遍历一遍可以拿出最小值，但是没有利用上数组的有序性

2、第二种最大值后面那个就是最小值 (遍历过程中如果后面的值出现比前面的小了，那么那个值就是最小值了，如果没有出现 则 说明数组是有序的，返回第一个)


3、(二分查找)