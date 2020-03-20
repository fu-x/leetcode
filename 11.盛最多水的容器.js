/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/* 暴力求解 
var maxArea = function (height) {
  let max = 0;
  for (let i = 0; i < height.length; ++i) {
    for (let j = i + 1; j < height.length; ++j) {
      let area = (j-i) * Math.min(height[i], height[j]);
      if(area > max) max = area;
    }
  }
  return max;
};
*/
// 头尾指针法
var maxArea = function (height) {
  let max = 0;
  for(let i=0, j=height.length-1; i<j;){
    let area = (j-i) * (height[i] < height[j] ? height[i++] : height[j--]);
    if(area > max) max = area;
  }
  return max;
};


// @lc code=end