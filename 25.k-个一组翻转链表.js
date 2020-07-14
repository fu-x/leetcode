/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let stack = []; // 栈
  let newHead = null; // 新头结点
  let temp = head;
  let last = null;
  while(true){
    for(let i=0; i<k; i++){ // 入栈
      if(!temp) return newHead ? newHead : head; 
      stack.push(temp)
      temp = temp.next;
    }
    if(last)  // 上一个栈的尾节点指向本栈头节点
      last.next = stack[stack.length-1];
    for(let i=stack.length-1; i>0; i--){  // 出栈
      if(!newHead) newHead = stack[i];
      stack[i].next = stack[i-1];
      stack.pop();
    }
    stack[0].next = temp;
    last = stack[0];  // 保存尾结点
    stack.pop();  // 尾结点出栈
  }
}
// @lc code=end