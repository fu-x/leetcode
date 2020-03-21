/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// var largestRectangleArea = function(heights) {
//   let max = 0;
//   for(let i=0; i<heights.length; i++){
//     max = Math.max(max, heights[i])
//     let height = heights[i];
//     for(let j=i+1; j<heights.length; j++){
//       let width = j-i+1;
//       height = Math.min(height, heights[j]);
//       let area = height * width;
//       if(max < area) max = area;
//     }
//   }
//   return max
// };
var largestRectangleArea = function(heights) {
  let max = 0;
  for(let i=0; i<heights.length; i++){
    let height = heights[i];
    let width = 1;
    for(let j=i-1; j>=0; j--){
      if(heights[j]>=height){
        width++;
      }else{
        break;
      }
    }
    for(let k=i+1; k<heights.length; k++){
      if(heights[k]>=height){
        width++;
      }else{
        break;
      }
    }
    let area = width * height;
    max = Math.max(max, area);
  }
  return max;
};
// @lc code=end

