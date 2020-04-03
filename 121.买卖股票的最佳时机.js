/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 暴力法
// var maxProfit = function(prices) {
//   let max = 0;
//   for(let i=0; i<prices.length-1; i++){
//     for(let j=i+1; j<prices.length; j++){
//       max = Math.max(max, prices[j]-prices[i])
//     }
//   }
//   return max
// };
// 一次遍历
// var maxProfit = function(prices) {
//   let minprice = Number.MAX_SAFE_INTEGER
//   let max = 0
//   for(let i = 0;i<prices.length;i++){
//       if(prices[i]<minprice){
//           minprice = prices[i]
//       }else{
//           max = Math.max(max,prices[i]-minprice)
//       }
//   }
//   return max
// }
// 动态规划-数组
// var maxProfit = function(prices) {
//   if(prices.length == 0) return 0;
//   let arr = new Array(prices.length);
//   for(let i=0; i<arr.length; i++) arr[i] = new Array(2);
//   arr[0][0] = 0;
//   arr[0][1] = -prices[0];
//   for(let i=1; i<prices.length; i++){
//     arr[i][0] = Math.max(arr[i-1][0], arr[i-1][1] + prices[i]);
//     arr[i][1] = Math.max(arr[i-1][1], -prices[i]);
//   }
//   return arr[prices.length-1][0];
// }
// 动态规划-优化
var maxProfit = function(prices) {
  let sell = 0;
  let buy = -prices[0];
  for(let i=1; i<prices.length; i++){
    sell = Math.max(sell, buy + prices[i]);
    buy = Math.max(buy, -prices[i]);
  }
  return sell;
}

// @lc code=end

