/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  for(let i=nums.length-2, j=1;; --i,++j){
    if(nums[i] == nums[i+1]){
      nums.splice(i, 1);
    }
    if(nums[j] == nums[j-1]){
      nums.splice(j, 1);
      i--;
      j--;
    }
    if(i <= j) return;
  }
};
// @lc code=end

