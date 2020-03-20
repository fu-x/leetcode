/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归方法1
// var reverseList = function(head) {
//   if(!head) return head;
//   let finalNode = reverse(head, head.next);
//   head.next = null;
//   return finalNode;
// };
// function reverse(lastNode, node){
//   if(!node) return lastNode;
//   let finalNode = reverse(node, node.next);
//   node.next = lastNode;
//   return finalNode;
// }

// 递归方法2
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let finalNode = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return finalNode;
}

// 双指针迭代法
// var reverseList = function (head) {
//   let prev = null;
//   let curv = head;
//   let temp = null;
//   while(curv){
//     temp = curv.next; 
//     curv.next = prev;
//     prev = curv;
//     curv = temp;
//   }
//   return prev;
// }



// @lc code=end