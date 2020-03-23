/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
var isValidBST = function(root) {
  let arr = [];
  traversal(root, arr);
  for(let i=1; i<arr.length; i++){
    if(arr[i] <= arr[i-1]) return false;
  }
  return true;
};
function traversal(root, arr){
  if(!root) return;
  if(root.left) traversal(root.left, arr);
  arr.push(root.val);
  if(root.right) traversal(root.right, arr);
}
// @lc code=end

