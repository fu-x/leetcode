/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let str = '';
  let stack = '';
  let arr = [];
  let cur = 0;
  let max = n;
  __generate(n, str, stack, arr, cur, max);
  return arr;
};
function __generate(n, str, stack, arr, cur, max){
  if(n == 0){
    arr.push(str)
    return;
  }
  if(stack.length == 0){
    let str1 = str + '(';
    let stack1 = stack + '(';
    let cur1 = cur + 1;
    __generate(n, str1, stack1, arr, cur1, max);
    return;
  }else{
    let str1 = str + ')';
    let stack1 = stack.slice(0, -1);
    let n1 = n - 1;
    __generate(n1, str1, stack1, arr, cur, max);
  }
  if(cur < max){
    str += '('
    stack += '(';
    cur++;
    __generate(n, str, stack, arr, cur, max);
  }
}
// @lc code=end

