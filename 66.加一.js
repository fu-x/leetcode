/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let index = digits.length-1;
  console.log(index);
  while(true){
    if(index < 0){
      digits.unshift(1);
      return digits;
    }
    if(digits[index] == 9){
      digits[index--] = 0;
    }else{
      digits[index]++;
      return digits;
    }
  }
};
// @lc code=end

