/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2);
  arr.sort((a, b)=>a - b);
  let lenth = arr.length;
  if(lenth % 2 == 1){
    return arr[lenth >> 1]
  }else{
    return (arr[lenth/2]+arr[lenth/2-1])/2
  }
};
// @lc code=end

