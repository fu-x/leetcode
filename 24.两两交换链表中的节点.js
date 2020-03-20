/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  if(!head || !head.next) return head;
  let newHead = head.next;
  let prev = null;
  while(head && head.next){
    let temp = head.next;
    head.next = head.next.next;
    temp.next = head;
    if(prev) prev.next = temp;
    prev = head;
    head = head.next;
  }
  return newHead;
};
// @lc code=end

