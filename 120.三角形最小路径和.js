/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
// 递归
let minimumTotal = function(triangle) {
  let obj = {};
  return move(triangle, obj, 0, 0)
};
function move(triangle, obj, level, index){
  if(level >= triangle.length - 1) obj[level + '-' + index] = triangle[level][index];
  if(obj[level + '-' + index] != undefined) return obj[level + '-' + index];
  let left = move(triangle, obj, level+1, index);
  let right = move(triangle, obj, level+1, index+1);
  let sum = Math.min(left, right) + triangle[level][index];
  obj[level + '-' + index] = sum;
  return sum;
}
// 自底向上
// var minimumTotal = function(triangle) {
//   let height = triangle.length-1
//   let arr = triangle[height];
//   for(let i=height; i>=1; i--){
//     for(let j=0; j<triangle[i].length-1; j++){
//       arr[j] = triangle[i-1][j] + Math.min(arr[j], arr[j+1]);
//     }
//   }
//   return arr[0];
// };
// @lc code=end

