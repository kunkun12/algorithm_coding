
**题目描述**


>小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck! 


>输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序


**输入描述**

>5
>
>100


**输出描述**


>2 3
>
>9 10 11 12 13 14 15 16
>18 19 20 21 22

#题目一：和为sum的两个数
-------

我们先考虑个简单的

>参见 
>
>[LeetCode题解--1. Two Sum](http://blog.csdn.net/gatieme/article/details/50596965)


| 牛客OJ | 九度OJ | CSDN题解 | GitHub代码 | 
| ------------- |:-------------:| -----:|
|[041-和为S的两个数字](http://www.nowcoder.com/practice/390da4f7a00f44bea7c2f3d19491311b?tpId=13&tqId=11195&rp=2&ru=%2Fta%2Fcoding-interviews&qru=%2Fta%2Fcoding-interviews%2Fquestion-ranking) | [1352-和为S的连续正数序列](http://ac.jobdu.com/problem.php?pid=1352) | [剑指Offer--041-和为S的连续正数序列](http://blog.csdn.net/gatieme/article/details/51357308) | [041-和为S的两个数字](https://github.com/gatieme/CodingInterviews/tree/master/041-和为S的两个数字) |

##题目描述
-------

>输入一个递增排序的数组和一个数字s，在数组中查找两个数，得它们的和正好是s。如果有多对数字的和等于s，输出乘积最小的即可。
>
>
>举例说明
>
>例如输入数组｛1 、2 、4、7 、11 、15 ｝和数字15. 
>
>由于4+ 11 = 15 ，因此输出4 和11 。

