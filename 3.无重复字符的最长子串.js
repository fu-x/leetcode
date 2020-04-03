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

// @lc code=end

