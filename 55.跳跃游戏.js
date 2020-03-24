/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//   if(nums.length == 1) return true;
//   let step = nums[0];
//   if(step == 0) return false;
//   for(let i=1; i<nums.length-1; i++){
//     step--;
//     if(nums[i] > step){
//       step = nums[i];
//     }
//     if(step <= 0) return false;
//   }
//   return true;
// };
// 贪心
var canJump = function(nums) {
  let d = nums.length-1;
  for(let i=nums.length-1; i>=0; i--){
    if(nums[i] >= d-i) d = i;
  }
  if(d == 0) return true;
  return false;
};
// @lc code=end

