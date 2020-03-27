/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let res = nums[0];
  let sum = 0;
  for(let i=0; i<nums.length; i++){
    sum += nums[i];
    res = Math.max(sum, res);
    sum = sum > 0 ? sum : 0;
  }
  return res
};
// @lc code=end

