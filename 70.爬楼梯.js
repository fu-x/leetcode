/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if(n <= 2) return n;
  let f1 = 1, f2 = 2, f3;
  for(let i = 3; i <= n; i++){
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
};



// @lc code=end

