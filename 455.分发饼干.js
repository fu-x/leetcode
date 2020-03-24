/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let num = 0, i = 0; j = 0;
  g.sort((a, b)=> a -b);
  s.sort((a, b)=> a -b);
  while(i < g.length && j < s.length){
    if(s[j] >= g[i]){
      i++;
      j++;
      num++;
    }else j++;
  }
  return num;
};
// @lc code=end

