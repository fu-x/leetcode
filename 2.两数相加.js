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
// var addTwoNumbers = function (l1, l2) {
//   let head = l1;
//   while (true) {
//     let sum = l1.val + l2.val;
//     console.log(sum);
//     if (sum >= 10) {
//       l1.val = Math.floor(sum % 10);
//       if(!l1.next) l1.next = new ListNode(0);
//       l1 = l1.next;
//       l1.val++;
//       l2 = l2.next ? l2.next : new ListNode(0);
//     } else {
//       l1.val = sum;
//       if (!l2.next) break;
//       if (!l1.next) {
//         l1.next = l2.next;
//         break;
//       }
//       l1 = l1.next;
//       l2 = l2.next;
//     }
//   }
//   return head;
// };
var addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let newList = head;
  let isCarry = false;
  while (l1 || l2 || isCarry) {
    let sum = 0;
    if (!l1 && l2) sum += l2.val;
    else if(!l2 && l1) sum += l1.val;
    else if(l1 && l2) sum += l1.val + l2.val;
    if (isCarry) sum += 1;
    isCarry = sum >= 10;
    newList.val = sum % 10;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    if (l1 || l2 || isCarry) {
      newList.next = new ListNode(0);
      newList = newList.next;
    }
  }
  return head;
};
// @lc code=end