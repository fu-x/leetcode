/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp1
// var rob = function(nums) {
//   if(nums.length == 0) return 0;
//   let arr = new Array(nums.length);
//   for(let i=0; i<arr.length; i++) arr[i] = new Array(2);
//   arr[0][0] = 0;
//   arr[0][1] = nums[0];
//   for(let i=1; i<arr.length; i++){
//     arr[i][0] = Math.max(arr[i-1][1], arr[i-1][0]);
//     arr[i][1] = arr[i-1][0] + nums[i]
//   }
//   return Math.max(arr[arr.length-1][0], arr[arr.length-1][1])
// };
// dp2
// var rob = function(nums) {
//   if(nums.length == 0) return 0;
//   let arr = [];
//   arr[0] = nums[0];
//   arr[1] = Math.max(arr[0], nums[1]);
//   for(let i=2; i<nums.length; i++){
//     arr[i] = Math.max(arr[i-1], arr[i-2] + nums[i]);
//   }
//   return arr[nums.length-1];
// }
// dp3
var rob = function(nums) {
  if(nums.length == 0) return 0;
  if(nums.length == 1) return nums[0];
  x = nums[0];
  y = Math.max(x, nums[1]);
  for(let i=2; i<nums.length; i++){
    temp = Math.max(y, x + nums[i]);
    x = y;
    y = temp;
  }
  return y;
};
// @lc code=end

