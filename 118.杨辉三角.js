/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 *
 * https://leetcode-cn.com/problems/pascals-triangle/description/
 *
 * algorithms
 * Easy (63.75%)
 * Likes:    186
 * Dislikes: 0
 * Total Accepted:    35.5K
 * Total Submissions: 55.6K
 * Testcase Example:  '5'
 *
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。
 *
 *
 *
 * 在杨辉三角中，每个数是它左上方和右上方的数的和。
 *
 * 示例:
 *
 * 输入: 5
 * 输出:
 * [
 * ⁠    [1],
 * ⁠   [1,1],
 * ⁠  [1,2,1],
 * ⁠ [1,3,3,1],
 * ⁠[1,4,6,4,1]
 * ]
 *
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) {
    return [];
  }
  const result = [];
  let i = 0;
  while (i < numRows) {
    const sub = [];
    let j = 0;
    while (j <= i) {
      if (j > 0 && j < i) {
        // 上一行对应位置有数据，进行相加
        sub.push(result[i - 1][j - 1] + result[i - 1][j]);
      } else {
        sub.push(1);
      }
      j++;
    }
    result.push(sub);
    i++;
  }
  return result;
};
