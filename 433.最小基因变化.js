/*
 * @lc app=leetcode.cn id=433 lang=javascript
 *
 * [433] 最小基因变化
 */

// @lc code=start
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  let queue = [start];
  let pre = 1;
  let next = 0;
  let count = 0;
  while(queue.length > 0){
    console.log(queue);
    let str = queue.shift();
    if(str === end) return count;
    pre--;
    for(let i=0; i<bank.length; i++){
      let num = 0;
      let index = 0;
      for(let j=0; j<str.length; j++){
        if(bank[i][j] !== str[j]){          
          num++;
          index = j;
        }
      }
      if(num == 1){
        queue.push(bank[i]);
        bank.splice(i--, 1);
        next++;
      }
    }
    if(pre == 0){
      pre = next;
      next = 0;
      count++;
    }
  }
  return -1;
};
// @lc code=end

