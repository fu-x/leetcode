/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
var levelOrderBottom = function(root) {
  if(!root) return []
  let queue = [[root]];
  let res = [[]]
  let level = 0;
  while(queue[level].length){
    let len = queue[level].length;
    while(len--){
      let node = queue[level].shift();
      if(res[level] == undefined) res[level] = [];
      res[level].push(node.val);
      if(queue[level+1] == undefined) queue[level+1] = [];
      if(node.left) queue[level+1].push(node.left);
      if(node.right) queue[level+1].push(node.right);
    }
    level++;
  }
  return res.reverse();
};
// @lc code=end

