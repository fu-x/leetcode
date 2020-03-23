/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
  if(!digits) return [];
  let obj = {2:'abc', 3:'def', 4:'ghi', 5:'jkl', 6:'mno', 7:'pqrs', 8:'tuv', 9:'wxyz'};
  let arr = obj[digits[0]].split('');
  for(let i=1; i<digits.length; i++){
    let str = obj[digits[i]];
    let newArr = [];
    for(let j=0; j<str.length; j++){
      for(let k=0; k<arr.length; k++){
        newArr.push(arr[k]+str[j]);
      }
    }
    arr = newArr;
  }
  return arr;
};
// 递归
// var letterCombinations = function(digits) {
//   if(!digits) return [];
//   let obj = {2:'abc', 3:'def', 4:'ghi', 5:'jkl', 6:'mno', 7:'pqrs', 8:'tuv', 9:'wxyz'};
//   let arr = obj[digits[0]].split('');
//   return recursion(arr, digits, 1, obj);
// };
// function recursion(arr, digits, index, obj){
//   if(index == digits.length) return arr;
//   let str = obj[digits[index]];
//   let newArr = [];
//   for(let i=0; i<str.length; i++){
//     for(let j=0; j<arr.length; j++){
//       newArr.push(arr[j] + str[i]);
//     }
//   }
//   return recursion(newArr, digits, ++index, obj);
// }
// @lc code=end

