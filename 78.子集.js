/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let arr = [[]];
  for(let i=0; i<nums.length; i++){
    let length = arr.length;
    for(let j=0; j<length; j++){
      arr.push(arr[j].concat(nums[i]));
    }
  }
  return arr;
};
// 递归
// var subsets = function(nums) {
//   let arr = [[]];
//   let index = 0;
//   recursion(nums, arr, index);
//   return arr;
// };
// function recursion(nums, arr, index){
//   console.log(arr);
//   if(nums.length == 0) return;
//   arr.push(nums);
//   for(let i=index; i<nums.length; i++){
//     recursion(nums.slice(0, i).concat(nums.slice(i+1)), arr, index++);
//   }
// }
// @lc code=end

