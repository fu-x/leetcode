/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if(!root) return []
  let queue = [root];
  let pre = 1;
  let cur = 0;
  let arr = [];
  let level = 0;
  while(queue.length > 0){
    let node = queue.shift();
    pre--;
    if(!arr[level]) arr[level] = [node.val];
    else arr[level].push(node.val);
    node.children.forEach(item=>{
      queue.push(item);
      cur++;
    })
    if(pre == 0){
      pre = cur;
      cur = 0;
      level++;
    }
  }
  return arr;
};
// @lc code=end

