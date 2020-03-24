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
// 动态规划
var maxProfit = function(prices) {
  let last = 0;
  let max = 0;
  for(let i=0; i<prices.length-1; i++){
    last = Math.max(0, last + prices[i+1]-prices[i]);
    max = Math.max(last, max);
  }
  return max;
}

// @lc code=end

