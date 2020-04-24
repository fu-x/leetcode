/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let stack = [];
  while(pushed.length > 0){
    stack.push(pushed.shift());
    while(stack[stack.length-1] == popped[0] && popped.length !== 0){
      stack.pop();
      popped.shift();
    }
  }
  return popped.length == 0
};
// @lc code=end

