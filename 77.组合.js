/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let res = [];
  fn(res, [], 1, k, n);
  return res;
};
function fn(res, arr, index, k, n){
  if(k == 0){
    res.push(arr);
    return;
  }
  if(k > n - index + 1) return;
  for(let i=index; i<=n; i++){
    let curArr = [...arr, i]
    fn(res, curArr, i+1, k-1, n);
  }
}
// @lc code=end

