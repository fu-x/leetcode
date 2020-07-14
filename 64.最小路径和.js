/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  let dp = new Array(grid[0].length)
  dp[0] = grid[0][0]
  for (let i = 1; i < dp.length; i++) {
    dp[i] = grid[0][i] + dp[i-1]
  }
  for (let i = 1; i < grid.length; i++) {
    dp[0] = grid[i][0] + dp[0]
    for (let j = 1; j < grid[i].length; j++) {
      dp[j] = grid[i][j] + Math.min(dp[j-1], dp[j])
    }
  }
  return dp[dp.length-1]
};
// @lc code=end

