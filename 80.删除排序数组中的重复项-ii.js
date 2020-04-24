/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let count = 1;
  for(let i=nums.length-2; i>=0; i--){
    if(nums[i] !== nums[i+1]) count = 1;
    else if(nums[i] == nums[i+1]) count++;
    if(count > 2) nums.splice(i, 1);
  }
  return nums.length;
};
// @lc code=end

