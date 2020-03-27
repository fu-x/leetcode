/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// 递归
var uniquePaths = function(m, n) {
  let obj = {};
  obj[m + '-' + n] = 1;
  return move(1, 1, m, n, obj);
};
function move(x, y, m, n, obj){
  if(obj[x + '-' + y]) return obj[x + '-' + y];
  let count = 0;
  if(x != m) count += move(x+1, y, m, n, obj);
  if(y != n) count += move(x, y+1, m, n, obj);
  obj[x + '-' + y] = count;
  return count;
}
// 循环
// var uniquePaths = function (m, n) {
//   var cur = new Array(n).fill(1);
//   for (var i = 1; i < m; i++) {
//     for (var r = 1; r < n; r++) {
//       cur[r] = cur[r - 1] + cur[r];
//     }
//   }
//   return cur[n - 1];
// };

// @lc code=end