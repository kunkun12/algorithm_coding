[172. Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/)


Given an integer n, return the number of trailing zeroes in n!.

Example 1:

    Input: 3
    Output: 0
    Explanation: 3! = 6, no trailing zero.
Example 2:

    Input: 5
    Output: 1
    Explanation: 5! = 120, one trailing zero.


问题就简化为找有几对2*5,能不能进一步简化捏？必须可以啊!
我们发现2的个数是远远多于5的，所以最终简化为了找出5的个数！
如果找出5的个数呢，比如20!，从1到20,共有5，10，15,20,共有4个5，即结尾0的个数为n/5！
这样就ok么？当然没ok，25!结果不只是25/5=5个0，25结果有6个0,因为25=5*5，有两个5。所以结果f(n)=n/5+f(n/5)!