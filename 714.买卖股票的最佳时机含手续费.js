/*
 * @lc app=leetcode.cn id=714 lang=javascript
 *
 * [714] 买卖股票的最佳时机含手续费
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  let sell = 0;
  let buy = -prices[0];
  for(let i=1; i<prices.length; i++){
    let temp = sell;
    sell = Math.max(sell, buy + prices[i] - fee);
    buy = Math.max(buy, temp - prices[i]);
  }
  return sell;
};
// @lc code=end

