/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let m = text1.length;
  let n = text2.length;
  let arr = new Array(m+1);
  for(let i=0; i<=m; i++) arr[i] = new Array(n+1).fill(0);
  for(let i=1; i<=m; i++){
    for(let j=1; j<=n; j++){
      if(text1[i-1] == text2[j-1]) arr[i][j] = arr[i-1][j-1] + 1;
      else arr[i][j] = Math.max(arr[i-1][j], arr[i][j-1]);
    }
  }
  return arr[m][n];
};

// @lc code=end

