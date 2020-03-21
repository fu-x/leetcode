/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let obj = {};
  strs.forEach((el, index) => {
    el = el.split('').sort().join('');
    console.log(el);
    if(!obj[el]) obj[el] = [strs[index]];
    else obj[el].push(strs[index]);
  });
  let arr = [];
  for(let i in obj){
    arr.push(obj[i]);
  }
  return arr;
};
// @lc code=end

