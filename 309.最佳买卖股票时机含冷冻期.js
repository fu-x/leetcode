/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划-数组
// var maxProfit = function(prices) {
//   if(prices.length == 0 || prices.length == 1) return 0;
//   let arr = new Array(prices.length);
//   for(let i=0; i<prices.length; i++) arr[i] = new Array(2);
//   arr[0][0] = 0;
//   arr[0][1] = -prices[0];
//   arr[1][0] = Math.max(arr[0][0], arr[0][1] + prices[1]);
//   arr[1][1] = Math.max(arr[0][1], -prices[1]);
//   for(let i=2; i<arr.length; i++){
//     arr[i][0] = Math.max(arr[i-1][0], arr[i-1][1] + prices[i]);
//     arr[i][1] = Math.max(arr[i-1][1], arr[i-2][0] - prices[i]);
//   }
//   return arr[arr.length-1][0];
// };
// 动态规划
var maxProfit = function(prices) {
  let sell = 0;
  let buy = -prices[0];
  let last = 0;
  for(let i=1; i<prices.length; i++){
    let temp = sell;
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, last - prices[i]);
    last = temp;
  }
  return sell;
};
// @lc code=end

