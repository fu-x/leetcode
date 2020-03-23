/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let res = sqrt(x, Math.abs(n));
  return n < 0 ? 1/res : res;
};

function sqrt(x, n) {
  if(n == 1) return x;
  if(n == 0) return 1;
  if (n == 2) {
    return x * x;
  }
  let m = Math.floor(n / 2);
  let half = sqrt(x, m);
  return n % 2 == 1 ? half * half * x : half * half;
}
// @lc code=end