/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 递归
// var fib = function(N) {
//   let obj = {0: 0, 1: 1};
//   return fn(N, obj);
// };
// function fn(n, obj){
//   if(obj[n] !== undefined) return obj[n];
//   let res = fn(n-1, obj) + fn(n-2, obj);
//   obj[n] = res;
//   return res;
// }
// 数组
// var fib = function(N) {
//   if(N < 2) return N;
//   let arr = [0, 1];
//   for(let i=2; i<=N; i++){
//     arr[i] = arr[i-1] + arr[i-2];
//   }
//   return arr[N];
// };
// 空间复杂度O(1)
var fib = function(N) {
  let n1 = 0;
  let n2 = 1;
  for(let i=2; i<=N; i=i+2){
    n1 = n1 + n2;
    n2 = n1 + n2;
  }
  if(N % 2 == 0) return n1;
  if(N % 2 == 1) return n2;
};
// @lc code=end

