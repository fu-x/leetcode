/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 递归
// var uniquePathsWithObstacles = function(obstacleGrid) {
//   let obstacles = {}
//   let m = obstacleGrid.length - 1;
//   let n = obstacleGrid[m].length - 1;
//   obstacles[m + '-' + n] = 1;
//   for(let i=0; i<obstacleGrid.length; i++){
//     for(let j=0; j<obstacleGrid[i].length; j++){
//       if(obstacleGrid[i][j] == 1) obstacles[i + '-' + j] = 0;
//     }
//   }
//   return move(0, 0, m, n, obstacles);
// };
// function move(x, y, m, n, obstacles){
//   if(obstacles[x + '-' + y] !== undefined) return obstacles[x + '-' + y]
//   let count = 0;
//   if(x !== m) count += move(x+1, y, m, n, obstacles);
//   if(y !== n) count += move(x, y+1, m, n, obstacles);
//   obstacles[x + '-' + y] = count;
//   return count;
// }

// 循环
var uniquePathsWithObstacles = function (obstacleGrid) {
  var n = obstacleGrid.length;
  var m = obstacleGrid[0].length;
  var result = Array(m).fill(0);
  result[0] = 1;
  for(let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      if(obstacleGrid[i][j] == 1) result[j] = 0;
      else if(j > 0) result[j] += result[j-1];
    }
  }
  return result[m-1];
};
// @lc code=end