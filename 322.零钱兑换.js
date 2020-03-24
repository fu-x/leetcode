/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let arr = new Array(amount+1).fill(Infinity);
  arr[0] = 0;
  for(let coin of coins){
    for(let i=1; i<=amount; i++){
      if(i - coin >= 0){
        arr[i] = Math.min(arr[i], arr[i - coin] + 1);
      }
    }
  }
  return arr[amount] == Infinity ? -1 : arr[amount];
}

// var coinChange = function(coins, amount) {
//   let arr = new Array(amount+1).fill(Infinity);
//   arr[0] = 0;
//   coinSub(coins, amount, arr);
//   return arr[amount] == Infinity ? -1 : arr[amount];
// }
// function coinSub(coins, amount, arr){
//   for(let coin of coins){
//     if(amount-coin >= 0){
//       coinSub(coins, amount-coin, arr)
//       arr[amount] = Math.min(arr[amount], arr[amount-coin]+1);
//     }
//   }
// }
// @lc code=end

