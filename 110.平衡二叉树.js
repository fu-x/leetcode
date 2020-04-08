/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function(root) {
  let deep = subIsBalanced(root, 2);
  if(!deep) return false;
  else return true;
};
function subIsBalanced(root, deep){
  if(!root) return deep-1;
  let left = subIsBalanced(root.left, deep+1);
  let right = subIsBalanced(root.right, deep+1);
  if(!left || !right) return false;
  if(Math.abs(left-right) <= 1) return Math.max(left, right);
  else return false;
}
// @lc code=end

