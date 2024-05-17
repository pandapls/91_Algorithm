/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  // 利用k的取余操作 对num中倒叙进行相加
  const ret = [];
  const n = num.length;

  for (let i = n - 1; i >= 0; --i) {
    let sum = num[i] + k % 10;
    k = Math.floor(k / 10)
    if (sum >= 10) {
      k++;
      sum -= 10;
    }
    ret.push(sum)
  }

  for (; k > 0; k = Math.floor(k / 10)) {
    ret.push(k % 10)
  }
  return ret.reverse();
};