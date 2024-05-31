
```
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例 1：
```

![image](https://p.ipic.vip/r1afvu.jpg)

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
输出：[1]
 

提示：

链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
```

### 思路

 使用辅助栈

### 代码

```javascript
var swapPairs = function(head) {
    let dummyNode = new ListNode(-1);
    dummyNode.next = head;

    let node = dummyNode;

    while(node && node.next && node.next.next) {
        let prev = node;
        let curNode = prev.next;
        let tmp = curNode.next;
        curNode.next = tmp.next;
        tmp.next = prev.next;
        prev.next = tmp;

        node = curNode
    }

    return dummyNode.next
};

```

**复杂度分析**
- 时间复杂度：O(n)
- 空间复杂度：O(1)