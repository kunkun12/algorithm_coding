

[65. Valid Number](https://leetcode.com/problems/valid-number/)

>请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。

例如，
字符串"+100","5e2","-123","3.1416"和"-1E-16"都表示数值。
但是"12e","1a3.14","1.2.3","+-5"和"12e+4.3"都不是。

#分析
-------

我们首先分析一下子**可能是数值的字符串的格式**
在数值之前可能有一个表示正负的’-‘或者’+’。
接下来是若干个0到9的数位表示数值的整数部分（在某些小数里可能没有数值的整数部分）。
如果数值是一个小数，那么在小数点后面可能会有若干个0到9的数位表示数值的小数部分。如果数值用科学计数法表示，接下来是一个’e’或者‘E’，以及紧跟着的一个整数（可以有正负号）表示指数。 
　　
判断一个字符串是否符合上述模式时，
*    首先看第一个字符是不是正负号。
*    如果是，在字符串上移动一个字符，继续扫描剩余的字符串中0到9的数位。
*    如果是一个小数，则将遇到小数点。
*    另外，如果是用科学计数法表示的数值，在整数或者小数的后面还有可能遇到’e’或者’E’。



Validate if a given string can be interpreted as a decimal number.

Some examples:
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:

Numbers 0-9
Exponent - "e"
Positive/negative sign - "+"/"-"
Decimal point - "."
Of course, the context of these characters also matters in the input.

Update (2015-02-10):
The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument, please click the reload button to reset your code definition.