/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function(s) {
//   if(!s) return true;
//   let stack = [s[0]];
//   for(let i=1; i<s.length; i++){
//     if(s[i] == ')'){
//       stack[stack.length-1] == '(' ? stack.pop() : stack.push(s[i]);
//     }else if(s[i] == '}'){
//       stack[stack.length-1] == '{' ? stack.pop() : stack.push(s[i]);
//     }else if(s[i] == ']'){
//       stack[stack.length-1] == '[' ? stack.pop() : stack.push(s[i]);
//     }else{
//       stack.push(s[i]);
//     }
//   }
//   return stack.length == 0 ? true : false;
// };
var isValid = function(s) {
  let stack = [];
  let obj = {'(':')','[':']','{':'}'};
  for(let i=0; i<s.length; i++){
    if(!obj[s[i]]){
      if(obj[stack[stack.length-1]]!==s[i]){
        return false;
      }else{
        stack.pop();
      }
    }else{
      stack.push(s[i]);
    }
  }
  return stack.length == 0 ? true : false;
};
// @lc code=end

