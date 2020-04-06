/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let arr = [0];
  let sqrt = 0;
  for(let i=1; sqrt<=n; i++){
    sqrt = i * i;
    for(let j=sqrt; j<=n; j++){
      if(sqrt==1){
        arr[j] = j;
        continue;
      }
      arr[j] = Math.min(arr[j], Math.floor(j/sqrt) + arr[j%sqrt]);
    }
  }
  return arr[n];
};
// @lc code=end

