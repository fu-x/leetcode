/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// BFS
// var largestValues = function(root) {
//   if(!root) return [];
//   let arr = [];
//   let queue = [root];
//   while(queue.length){
//     let len = queue.length;
//     let max = -Infinity;
//     while(len--){
//       let node = queue.shift();
//       max = Math.max(node.val, max);
//       if(node.left) queue.push(node.left);
//       if(node.right) queue.push(node.right);
//     }
//     arr.push(max)
//   }
//   return arr;
// };
// DFS
var largestValues = function(root) {
  let arr = [];
  let level = 0;
  if(root) dfs(root, level, arr);
  return arr;
};
function dfs(root, level, arr){
  if(arr[level] == undefined) arr[level] = root.val;
  else arr[level] = Math.max(root.val, arr[level]);
  if(root.left) dfs(root.left, level+1, arr);
  if(root.right) dfs(root.right, level+1, arr);
}
// @lc code=end

