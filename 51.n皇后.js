/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let res = [];
  let cols = new Set();
  let pie = new Set();
  let na = new Set();
  for(let x=0; x<n; x++){
    let arr = [];
    queens(cols, pie, na, x, 0, arr, res, n);
  }
  return generateCheckerboard(res, n);
};
function queens(cols, pie, na, x, y, arr, res, n){
  if(y >= n) {
    res.push(arr);
    return true;
  };
  if(cols.has(x) || pie.has(x+y) || na.has(x-y)) {
    return false;
  };
  arr.push([x, y]);
  for(let i=0; i<n; i++){
    cols.add(x);
    pie.add(x+y);
    na.add(x-y);
    let arr1 = arr.slice(0);
    let flag = queens(cols, pie, na, i, y+1, arr1, res, n);
    cols.delete(x);
    pie.delete(x+y);
    na.delete(x-y);
    if(flag) break;
  }
}
function generateCheckerboard (res, n){
  let board = [];
  for(let i=0; i<res.length; i++){
    let arr = [];
    let subRes = res[i]
    for(let j=0; j<subRes.length; j++){
      let str = '';
      for(let k=0; k<n; k++){
        if(k==subRes[j][0]) str+='Q';
        else str+='.';
      }
      arr.push(str);
    }
    board.push(arr);
  }
  return board;
}
// @lc code=end

