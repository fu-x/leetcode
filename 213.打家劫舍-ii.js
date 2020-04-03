/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if(nums.length == 0) return 0;
  if(nums.length == 1) return nums[0];
  let arr1 = new Array(nums.length);
  let arr2 = new Array(nums.length);
  for(let i=0; i<nums.length; i++){
    arr1[i] = new Array(2);
    arr2[i] = new Array(2);
  } 
  arr1[0][0] = nums[0];
  arr1[0][1] = 0;
  arr2[1][0] = nums[1];
  arr2[1][1] = 0;
  for(let i=1; i<nums.length-1; i++){
    arr1[i][0] = arr1[i-1][1] + nums[i];
    arr1[i][1] = Math.max(arr1[i-1][0], arr1[i-1][1]);
  }
  for(let i=2; i<nums.length; i++){
    arr2[i][0] = arr2[i-1][1] + nums[i];
    arr2[i][1] = Math.max(arr2[i-1][0], arr2[i-1][1]);
  }
  return Math.max(arr2[nums.length-1][0], arr2[nums.length-1][1], arr1[nums.length-2][0], arr1[nums.length-2][1]);
};
// @lc code=end

