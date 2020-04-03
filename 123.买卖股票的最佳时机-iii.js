/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if(prices.length == 0) return 0;
  let count = 2;
  let arr = new Array(prices.length);
  for(let i=0; i<prices.length; i++){
    arr[i] = new Array(count+1);
    for(let j=0; j<=count; j++){
      arr[i][j] = new Array(2).fill(0);
    }
  }
  arr[0][2][0] = arr[0][1][0] = 0;
  arr[0][2][1] = arr[0][1][1] = -prices[0];
  for(let i=1; i<prices.length; i++){
    for(let j=count; j>=1; j--){
      arr[i][j][0] = Math.max(arr[i-1][j][0], arr[i-1][j][1] + prices[i]);
      arr[i][j][1] = Math.max(arr[i-1][j][1], arr[i-1][j-1][0] - prices[i]);
    }
  }
  return arr[prices.length-1][count][0];
};
// @lc code=end

