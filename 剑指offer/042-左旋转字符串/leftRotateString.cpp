// JS里面字符串没办法更改，这道题在JS里面意义不大，可以用字符数组

// 三步反转

class Solution {
public:
    void Reverse(string & str, int pBegin, int pEnd) {
        if (pBegin > pEnd)
            return;
        while (pBegin < pEnd){
            swap(str[pBegin], str[pEnd]);
            pBegin++;
            pEnd--;
        }
    }
    string LeftRotateString(string str, int n) {
        if (str.empty())
            return str;
        string::size_type length = str.size();
        n = n%length;
        Reverse(str, 0, n - 1);
        Reverse(str, n, str.size() - 1);
        Reverse(str, 0, str.size() - 1);
         
        return str;
 
    }
};
