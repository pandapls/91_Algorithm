```
给定一个字符串 S 和一个字符 C。返回一个代表字符串 S 中每个字符到字符串 S 中的字符 C 的最短距离的数组。

示例 1:

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
说明:

- 字符串 S 的长度范围为 [1, 10000]。
- C 是一个单字符，且保证是字符串 S 里的字符。
- S 和 C 中的所有字母均为小写字母。

```


### 思路

（此处撰写思路）

### 代码


```javascript

var shortestToChar = function (s, c) {
  const result = [];
  let prev = -Infinity;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == c) {
      prev = i
    }
    result[i] = i - prev
  }

  prev = Infinity;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == c) {
      prev = i
    }

    result[i] = Math.min(result[i], prev - i)
  }

  return result;
};
```

**复杂度分析**
- 时间复杂度：O(N)，其中 N 为数组长度。
- 空间复杂度：O(1)