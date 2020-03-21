/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   if(n <= 2) return n;
//   let f1 = 1, f2 = 2, f3;
//   for(let i = 3; i <= n; i++){
//     f3 = f1 + f2;
//     f1 = f2;
//     f2 = f3;
//   }
//   return f3;
// };
var climbStairs = function(n) {
  let obj = {0:0, 1:1, 2:2};
  return climb(n, obj);
};
function climb(n, obj){
  if(obj[n]) return obj[n];
  else{
    let n1 = climb(n-1, obj);
    let n2 = climb(n-2, obj);
    obj[n] = n1 + n2;
    return n1+n2;
  }
}



// @lc code=end

