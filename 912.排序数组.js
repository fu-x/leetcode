/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 快排
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length-1);
    return nums;
};
function quickSort(nums, head, tail){
  if(head >= tail) return;
  let count = head;
  for(let i=head; i<=tail; i++){
    if(nums[i] < nums[tail]) [nums[count++], nums[i]] = [nums[i], nums[count]];
  }
  [nums[count], nums[tail]] = [nums[tail], nums[count]];
  quickSort(nums, head, count-1);
  quickSort(nums, count+1, tail);
}
// 希尔排序
// var sortArray = function(nums) {
//   let grap = nums.length >> 1;
//   while(grap > 0){
//     for(let i=grap; i<nums.length; i++){
//       for(let j=i-grap; j>=0; j-=grap){
//         if(nums[j+grap] < nums[j]) [nums[j+grap], nums[j]] = [nums[j], nums[j+grap]];
//         else break;
//       }
//     }
//     grap = grap >> 1;
//   }
//   return nums;
// };
// 归并排序
// var sortArray = function(nums) {
//   mergeSort(nums, 0, nums.length-1);
//   return nums;
// };
// function mergeSort(nums, left, right){
//   if(left >= right) return;
//   let mid = (left + right) >> 1;
//   mergeSort(nums, left, mid);
//   mergeSort(nums, mid+1, right);
//   let temp = [];
//   let i=left, j=mid+1, k=0;
//   while(i <= mid && j <= right){
//     temp[k++] = nums[i] < nums[j] ? nums[i++] : nums[j++];
//   }
//   while(i <= mid) temp[k++] = nums[i++];
//   while(j <= right) temp[k++] = nums[j++];
//   for(let i=0; i<temp.length; i++) nums[i + left] = temp[i];
// }
// @lc code=end

