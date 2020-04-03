/*
 * @lc app=leetcode.cn id=188 lang=javascript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  if(prices.length == 0) return 0;
  if(k > prices.length/2) return maxProfit2(prices)
  let arr = new Array(prices.length);
  for(let i=0; i<arr.length; i++){
    arr[i] = new Array(k+1);
    for(let j=0; j<=k; j++){
      arr[i][j] = new Array(2).fill(0);
    }
  }
  for(let j=k; j>=1; j--){
    arr[0][j][0] = 0;
    arr[0][j][1] = -prices[0];
  }
  for(let i=1; i<arr.length; i++){
    for(let j=k; j>=1; j--){
      arr[i][j][0] = Math.max(arr[i-1][j][0], arr[i-1][j][1] + prices[i]);
      arr[i][j][1] = Math.max(arr[i-1][j][1], arr[i-1][j-1][0] - prices[i]);
    }
  }
  return arr[prices.length-1][k][0];
};
var maxProfit2 = function(prices) {
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

