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
// var findMedianSortedArrays = function(nums1, nums2) {
//   let arr = new Array(Math.ceil((nums1.length + nums2.length) / 2) + 1);
//   let  j = k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (nums1[j] === undefined) arr[i] = nums2[k++];
//     else if (nums2[k] === undefined) arr[i] = nums1[j++];
//     else arr[i] = nums1[j] < nums2[k] ? nums1[j++] : nums2[k++];
//   }
//   let middle;
//   if ((nums1.length + nums2.length) % 2 === 0) {
//     middle = (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
//   } else {
//     middle = arr[arr.length-2];
//   }
//   return middle;
// };
// @lc code=end

