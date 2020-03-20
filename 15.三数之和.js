/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let arr = [];
  nums.sort((a,b)=>a-b);
  for (let k = 0; k < nums.length-2; k++) {
    if(k > 0 && nums[k] === nums[k-1]){
      continue;
    }
    let i = k + 1,j = nums.length - 1;
    while (i < j){
      if(i > k+1 && nums[i-1] === nums[i]){
        i++;
        continue; 
      }
      if(j < nums.length - 1 && nums[j+1] === nums[j]){
        j--;
        continue; 
      }
      if(nums[i] + nums[j] === -nums[k]){
        arr.push([nums[k], nums[i++], nums[j--]]);
      }else{
        nums[i] + nums[j] > -nums[k] ? j-- : i++;
      }
    }
  }
  return arr;
};
// @lc code=end