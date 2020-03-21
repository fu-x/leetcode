/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
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
 * @return {number[]}
 */
// 递归
// var postorder = function(root) {
//     let arr = [];
//     traversal(root, arr);
//     return arr;
// };
// function traversal(root, arr){
//   if(!root) return;
//   root.children.forEach(node=>{
//     traversal(node, arr);
//   })
//   arr.push(root.val);
// }
// 栈
var postorder = function(root) {
    if(!root) return []
    let arr = [];
    let stack = [root];
    while(stack.length > 0){
      let node = stack.pop();
      arr.push(node.val);
      node.children.forEach(item=>{
        stack.push(item);
      })
    }
    return arr.reverse();
};
// @lc code=end

