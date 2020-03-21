/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function(s, t) {
//   s = s.split('').sort().join('');
//   t = t.split('').sort().join('');
//   console.log(s, t);
//   return s == t ? true : false;
// };
var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  let obj = {length: 0};
  for(let i=0; i<s.length; i++){
    if(obj[s[i]]){
      obj[s[i]]++;
    }
    else{
      obj[s[i]] = 1;
      obj.length++;
    }
  }
  for(let i=0; i<t.length; i++){
    if(obj[t[i]] && obj[t[i]]>0){
      obj[t[i]]--;
      if(obj[t[i]] == 0){
        obj.length--;
        delete obj[t[i]]
      }
    }
    else return false;
  }
  return true;
};
// @lc code=end

