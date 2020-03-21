/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 递归
// var inorderTraversal = function(root) {
//   let arr = [];
//   ergodic(root, arr);
//   return arr;
// };
// function ergodic(root, arr){
//   if(!root) return;
//   if(root.left) ergodic(root.left, arr);
//   arr.push(root.val);
//   if(root.right) ergodic(root.right, arr);
// }
// 栈
var inorderTraversal = function(root) {
  let arr = [];
  while(root){
    arr.push(root);
    root = root.left;
  }
  let res = [];
  while(arr.length>0){
    let outNode = arr.pop();
    res.push(outNode.val);
    outNode = outNode.right;
    while(outNode){
      arr.push(outNode);    
      outNode = outNode.left;
    }
  }
  return res;
};
// @lc code=end

