/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length-k))
};
// var rotate = function(nums, k) {
//   while(k--){
//     nums.unshift(nums.pop());
//   }
// };

// @lc code=end

