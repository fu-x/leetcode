/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) return 0
  let nums = [s[0]];
  let res = 1;
  for (let i = 1; i < s.length; i++) {
      let index = nums.indexOf(s[i]);
      if (index < 0) {
          nums.push(s[i]);
      } else {
          res = Math.max(res, nums.length);
          nums.splice(0, index + 1);
          nums.push(s[i]);
      }
  }
  return res > nums.length ? res : nums.length;
};
// var lengthOfLongestSubstring = function (s) {
//   if (s.length === 0) return 0;
//   let max = 0
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     if (map.has(s[i])) {
//       max = map.size > max ? map.size : max;
//       i = map.get(s[i]) + 1;
//       map.clear();
//       map.set(s[i], i);
//     } else {
//       map.set(s[i], i);
//     }
//   }
//   return max > map.size ? max : map.size;
// };

// @lc code=end

