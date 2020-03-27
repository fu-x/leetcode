/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var searchMatrix = function(matrix, target) {
//   if(matrix.length == 0) return false;
//   let left = 0;
//   let right = matrix.length - 1;
//   while(left < right){
//     let mid = (left + right) >> 1;
//     if(target < matrix[mid][0]) right = mid - 1;
//     else if(target > matrix[mid][matrix[mid].length-1]) left = mid + 1;
//     else right = left = mid;
//   }
//   let arr = matrix[left];
//   console.log(arr);
//   let min = 0, max = arr.length - 1;
//   while(min < max){
//     let mid = (min + max) >> 1;
//     if(target > arr[mid]) min = mid + 1;
//     else max = mid;
//   }
//   return arr[min] == target ? true : false;
// };
var searchMatrix = function(matrix, target) {
  let arr = [].concat(...matrix);
  let min = 0, max = arr.length - 1;
  while(min < max){
    let mid = (min + max) >> 1;
    if(target > arr[mid]) min = mid + 1;
    else max = mid;
  }
  return arr[min] == target ? true : false;
};
// @lc code=end

