/*
 * @lc app=leetcode.cn id=72 lang=javascript
 *
 * [72] 编辑距离
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let arr = new Array(word1.length+1).fill(0).map(()=>new Array(word2.length+1));
  for(let i=0; i<=word1.length; i++) arr[i][0] = i;
  for(let j=0; j<=word2.length; j++) arr[0][j] = j;
  for(let i=1; i<=word1.length; i++){
    for(let j=1; j<=word2.length; j++){
      arr[i][j] = word1[i-1] == word2[j-1] ? arr[i-1][j-1] : Math.min(arr[i-1][j-1], arr[i-1][j], arr[i][j-1]) + 1;
    }
  }
  return arr[word1.length][word2.length];
}
// @lc code=end

