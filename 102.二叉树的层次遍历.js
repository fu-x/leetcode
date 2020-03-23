/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层次遍历
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
 * @return {number[][]}
 */
// BFS
// var levelOrder = function(root) {
//   if(!root) return [];
//   let res = []; // 存储最终结果
//   let arr = []; // 存储一层的结果
//   let pre = 1;
//   let next = 0;
//   let queue = [root];
//   while(queue.length > 0){
//     let node = queue.shift();
//     arr.push(node.val);
//     pre--;
//     if(node.left){
//       queue.push(node.left);
//       next++;
//     }
//     if(node.right) {
//       queue.push(node.right);
//       next++;
//     }
//     if(pre == 0){
//       res.push([...arr]);
//       arr = [];
//       pre = next;
//       next = 0;
//     }
//   }
//   return res;
// };
// DFS
var levelOrder = function(root) {
  let res = [];
  traversal(root, res, 0);
  return res;
};
function traversal(root, res, level){
  if(!root) return;
  if(root.left) traversal(root.left, res, level+1)
  if(!res[level]) res[level] = [];
  res[level].push(root.val);
  if(root.right) traversal(root.right, res, level+1)
}
// @lc code=end

