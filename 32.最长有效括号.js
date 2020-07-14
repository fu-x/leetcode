/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const LEFT_BRACKET = '('
  const RIGHT_BRACKET = ')'
  let maxLength = 0
  let arr = new Array(s.length).fill(0)
  if (s[0] === LEFT_BRACKET && s[1] === RIGHT_BRACKET) arr[1] = maxLength = 2
  for (let i = 2; i < s.length; i++) {
    if (s[i] === RIGHT_BRACKET && s[i-1] === LEFT_BRACKET) {
      arr[i] = 2 + arr[i-2]
    } else if (s[i] === RIGHT_BRACKET && s[i-1] === RIGHT_BRACKET && arr[i-1] !== 0 && s[i-arr[i-1]-1] === LEFT_BRACKET) {
      arr[i] = 2 + arr[i-1]
      if (s[i-arr[i-1]-2] === RIGHT_BRACKET) arr[i] += arr[i-arr[i-1]-2]
    }
    maxLength = Math.max(arr[i], maxLength)
  }
  return maxLength
};
// @lc code=end

