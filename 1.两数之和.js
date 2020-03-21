/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//   for(let i=0; i<nums.length; i++){
//     for(let j=i+1; j<nums.length; j++){
//       if(nums[i] + nums[j] == target){
//         return [i, j]
//       }
//     }
//   }
// };
// 哈希表
var twoSum = function(nums, target) {
  let obj = {};
  for(let i=0; i<nums.length; i++){
    if(obj[target-nums[i]] !== undefined) return [obj[target-nums[i]], i];
    if(!obj[nums[i]]){
      obj[nums[i]] = i;
    }
    
  }
  return []
};
// @lc code=end

