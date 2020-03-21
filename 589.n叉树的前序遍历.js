/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
// 递归
// var preorder = function(root) {
//     let arr = [];
//     traversal(root, arr);
//     return arr;
// };
// function traversal(root, arr){
//   if(!root) return;
//   arr.push(root.val);
//   root.children.forEach(item=>{
//     traversal(item, arr);
//   })
// }
// 栈
var preorder = function(root) {
    let arr = [];
    if(!root) return arr;
    let stack = [root];
    while(stack.length > 0){
      let node = stack.pop();
      arr.push(node.val);
      let children = node.children
      for(let i=children.length-1; i>=0; i--){
        stack.push(children[i]);
      }
    }
    return arr;
};

// @lc code=end

