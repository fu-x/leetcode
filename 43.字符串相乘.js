/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1 == '0' || num2 == '0') return '0';
  let arr = new Array(num1.length + num2.length).fill(0);
  for(let i=num1.length-1; i>=0; i--){
    for(let j=num2.length-1; j>=0; j--){
      let mul = num1[i] * num2[j];
      let temp = arr[i+j+1] + mul;
      arr[i+j+1] = temp % 10;
      if(temp > 9) arr[i+j] += Math.floor(temp / 10);
    }
  }
  if(arr[0] == 0) arr.shift();
  return arr.join('');
};
// @lc code=end

