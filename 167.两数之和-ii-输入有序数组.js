/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 暴力法
// var twoSum = function(numbers, target) {
//   for(let i=0; i<numbers.length; i++){
//     for(let j=i+1; j<numbers.length; j++){
//       if(numbers[j] == target - numbers[i]){
//         return [i+1, j+1];
//       }
//     }
//   }
//   return [];
// };

// 双指针法
// var twoSum = function(numbers, target) {
//   for(let i=0, j=numbers.length-1; i<j;){
//     if(numbers[i]+numbers[j] == target) return [i+1, j+1];
//     else if(numbers[i]+numbers[j] < target) i++;
//     else j--;
//   }
//   return [];
// };

var twoSum = function(numbers, target) {
  for(let i=0, j=numbers.length-1; i<j;){
    if(numbers[i]+numbers[j] == target) return [i+1, j+1];
    else if(numbers[i]+numbers[j] < target) i++;
    else j--;
  }
  return [];
};

// @lc code=end

