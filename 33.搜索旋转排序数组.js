/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 二分查找最小值 + 二分查找目标值
// var search = function(nums, target) {
//   let left = 0;
//   let right = nums.length-1;
//   while(left < right){
//     let mid = Math.floor((left + right) / 2);
//     if(nums[mid] > nums[right]) left = mid + 1;
//     else right = mid;
//   }
//   let min = left;
//   if(target > nums[nums.length-1]){
//     left = 0;
//     right = min - 1;
//   }else{
//     left = min;
//     right = nums.length - 1;
//   }
//   while(left <= right){
//     let mid = Math.floor((left + right) / 2);
//     if(nums[mid] == target) return mid
//     if(nums[mid] > target) right = mid - 1;
//     else left = mid + 1;
//   }
//   return -1
// };
// 二分查找目标值
// var search = function(nums, target) {
//   if(nums.length == 1)
//     return target == nums[0] ? 0 : -1;
//   let left = 0;
//   let right = nums.length-1;
//   while(left < right){
//     console.log(left, right);
//     let mid = (left + right)>>1;
//     if(nums[left] < nums[right]){
//       if(nums[mid] < target) left = mid + 1;
//       else right = mid;
//     }else{
//       if(target > nums[right]){
//         if(target < nums[mid] || nums[mid] < nums[left]) right = mid - 1;
//         else if(target > nums[mid]) left = mid + 1;
//         else return mid;
//       } else{
//         if(target > nums[mid] || nums[mid] > nums[right]) left = mid + 1;
//         else if(target < nums[mid]) right = mid - 1;
//         else return mid;
//       }
//     }
//     if(nums[left] == target) return left;
//   }
//   return -1;
// };
// 精简版
var search = function(nums, target) {
  let left = 0;
  let right = nums.length-1;
  while(left < right){
    let mid = (left + right) >> 1;
    console.log(left, mid, right);
    if(target > nums[mid] && target < nums[0]) left = mid + 1;
    else if(nums[0] <= nums[mid] && (target > nums[mid] || target < nums[0])) left = mid + 1;
    else right = mid;
  }
  return left == right && nums[left] == target ? left : -1;
};

// @lc code=end

