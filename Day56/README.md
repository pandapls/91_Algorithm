```
给定一个未排序的整数数组，找到最长递增子序列的个数。

示例 1:

输入: [1,3,5,4,7]
输出: 2
解释: 有两个最长递增子序列，分别是 [1, 3, 4, 7] 和[1, 3, 5, 7]。
示例 2:

输入: [2,2,2,2,2]
输出: 5
解释: 最长递增子序列的长度是1，并且存在5个子序列的长度为1，因此输出5。
注意: 给定的数组长度不超过 2000 并且结果一定是32位有符号整数。

```



### 思路

 动态规划

### 代码

```javascript
var findNumberOfLIS = function(nums) {
    if (!nums || nums.length === 0) {
        return 0
    }

    let dp = Array.from({length: nums.length}).fill(1)
    let counts = Array.from({length: nums.length}).fill(1);
    

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] + 1 > dp[i]) {
                    dp[i] = dp[j] + 1;
                    counts[i] = counts[j];
                } else if (dp[j] + 1 === dp[i]) {
                    counts[i] += counts[j];
                }
            }
        }
    }
    let maxLen = Math.max(...dp);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (dp[i] === maxLen) {
            count += counts[i];
        }
    }

    return count;
};

```

**复杂度分析**
- 时间复杂度：O(n的平凡)
- 空间复杂度：O(n)