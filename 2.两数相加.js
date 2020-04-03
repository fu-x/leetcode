/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let head = l1;
  while (true) {
    let sum = l1.val + l2.val;
    console.log(sum);
    if (sum >= 10) {
      l1.val = Math.floor(sum % 10);
      if(!l1.next) l1.next = new ListNode(0);
      l1 = l1.next;
      l1.val++;
      l2 = l2.next ? l2.next : new ListNode(0);
    } else {
      l1.val = sum;
      if (!l2.next) break;
      if (!l1.next) {
        l1.next = l2.next;
        break;
      }
      l1 = l1.next;
      l2 = l2.next;
    }
  }
  return head;
};
// @lc code=end