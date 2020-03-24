/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let count = 0;
  let min = prices[0];
  for(let i=0; i<prices.length-1; i++){
    if(prices[i+1] > prices[i]){
      count +=  prices[i+1] - min;
      min = prices[i+1];
    }else min = prices[i+1];
  }
  return count;
};
// @lc code=end

