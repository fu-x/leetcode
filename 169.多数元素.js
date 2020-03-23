/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let half = Math.ceil(nums.length / 2);
  let obj = {}
  for(let i=0, j=nums.length-1; i<=j; i++, j--){
    if(obj[nums[i]]) obj[nums[i]]++;
    else obj[nums[i]] = 1;
    if(obj[nums[i]] >= half) return nums[i];
    if(obj[nums[j]]) obj[nums[j]]++;
    else obj[nums[j]] = 1;
    if(obj[nums[j]] >= half) return nums[j];
  }
};
// @lc code=end

