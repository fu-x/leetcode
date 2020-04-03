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
// var maxProfit = function(prices) {
//   let count = 0;
//   let min = prices[0];
//   for(let i=0; i<prices.length-1; i++){
//     if(prices[i+1] > prices[i]){
//       count +=  prices[i+1] - min;
//       min = prices[i+1];
//     }else min = prices[i+1];
//   }
//   return count;
// };
// 动态规划
var maxProfit = function(prices) {
  let sell = 0;
  let buy = -prices[0];
  for(let i=0; i<prices.length; i++){
    let temp = sell;
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, temp - prices[i]);
  }
  return sell;
};
// @lc code=end

