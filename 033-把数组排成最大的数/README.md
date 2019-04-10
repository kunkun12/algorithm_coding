Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.


先将整数数组转为字符串数组，然后字符串数组进行排序，最后依次输出字符串数组即可。这里注意的是字符串的比较函数需要重新定义，不是比较a和b，而是比较ab与 ba。如果ab < ba，则a < b；如果ab > ba，则a > b；如果ab = ba，则a = b。比较函数的定义是本解决方案的关键。这道题其实就是希望我们能找到一个排序规则，根据这个规则排出来的数组能排成一个最小的数字。