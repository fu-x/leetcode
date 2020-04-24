/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let i = matrix.length-1;
  let j = 0;
  while(i >= 0 && j < matrix[0].length ){
    if(target > matrix[i][j]) j++;
    else if(target < matrix[i][j]) i--;
    else return true;
  }
  return false;
};
// @lc code=end

