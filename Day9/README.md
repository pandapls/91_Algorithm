
```
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
```


### 思路
  由于已经是生序的链表
  使用快慢指针找到中间节点
  利用中间节点递归构建左右子树

### 代码

```javascript
var sortedListToBST = function(head) {
    if (!head) {
        return null;
    }

    let slow = head;
    let fast = head;
    let preSlow; //缓存slow前一个节点

    while(fast && fast.next) {
        preSlow = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    const root = new TreeNode(slow.val);
    if (preSlow) {
        preSlow.next = null;
        root.left = sortedListToBST(head)
    }

    root.right = sortedListToBST(slow.next)

    return root
};

```

**复杂度分析**
- 时间复杂度：，O(nlogn)
- 空间复杂度：O(logn)