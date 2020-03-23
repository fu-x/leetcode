/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// BFS
var ladderLength = function(beginWord, endWord, wordList) {
  let queue = [beginWord];
  let level = 1;
  while(queue.length){
    console.log(queue);
    let len = queue.length;
    while(len--){
      let str = queue.shift();
      if(str == endWord) return level;
      for(let i=0; i<wordList.length; i++){
        let num = 0;
        for(let j=0; j<str.length; j++){
          if(str[j] !== wordList[i][j]){
            num++;
          }
        }
        if(num == 1){
          queue.push(wordList[i]);
          wordList.splice(i, 1);
          i--;
        }
      }
    }
    level++;
  }
  return 0;
};
// @lc code=end

