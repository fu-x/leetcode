/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let arr = [];
  print(matrix, arr);
  return arr;
};
function print(matrix, arr) {
  if(matrix.length == 0) return;
  arr.push(...matrix.shift());
  if(matrix.length == 0) return;
  for(let i=0; i<matrix.length-1; i++){
    arr.push(matrix[i].pop());
    if(matrix[i].length == 0) matrix.splice(i--,1);
  }
  if(matrix.length == 0) return;
  arr.push(...matrix.pop().reverse());
  if(matrix.length == 0) return;
  for(let i=matrix.length-1; i>=0; i--){
    arr.push(matrix[i].shift());
    if(matrix[i].length == 0) matrix.splice(i,1);
  }
  print(matrix, arr);
}
// @lc code=end

