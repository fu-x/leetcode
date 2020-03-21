/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
// var preorderTraversal = function(root) {
//   let arr = [];
//   traversal(root, arr);
//   return arr;
// };
// function traversal(root, arr){
//   if(!root) return;
//   arr.push(root.val);
//   traversal(root.left, arr);
//   traversal(root.right, arr);
// }

// 栈
var preorderTraversal = function(root) {
  if(!root) return [];
  let stack = [root];
  let arr = [];
  while(stack.length > 0){
    let outNode = stack.pop();
    arr.push(outNode.val);
    if(outNode.right) stack.push(outNode.right);
    if(outNode.left) stack.push(outNode.left);
  }
  return arr;
};
// @lc code=end

