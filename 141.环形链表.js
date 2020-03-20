/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  let fast = head.next.next;
  let slow = head.next;
  while (fast !== slow) {
    if(!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true
};
// @lc code=end