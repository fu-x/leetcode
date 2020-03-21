/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  if(nums.length == 0 || k == 0) return nums;
  let arr = nums.splice(0, k);
  let res = [Math.max(...arr)];
  for(let i=0; i<nums.length; i++){
    arr.shift();
    arr.push(nums[i]);
    res.push(Math.max(...arr));
  }
  return res;
};
// @lc code=end

