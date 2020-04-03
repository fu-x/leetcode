/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let arr = new Array(nums.length);
  for(let i=0; i<arr.length; i++) arr[i] = new Array(2);
  arr[0][0] = arr[0][1] = nums[0];
  let res = nums[0];
  for(let i=1; i<nums.length; i++){
    if(nums[i] >= 0){
      arr[i][0] = arr[i-1][0] > 0 ? arr[i-1][0] * nums[i] : nums[i];
      arr[i][1] = arr[i-1][1] <= 0 ? arr[i-1][1] * nums[i] : nums[i];
    }else{
      arr[i][1] = arr[i-1][0] > 0 ? arr[i-1][0] * nums[i] : nums[i];
      arr[i][0] = arr[i-1][1] <= 0 ? arr[i-1][1] * nums[i] : nums[i];
    }
    res = Math.max(res, arr[i][0]);
  }
  return res;
};
// @lc code=end

