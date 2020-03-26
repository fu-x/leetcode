/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let der = 0;
  let endx = 0;
  let endy = 0;
  let result = 0;
  let obj = new Set();
  for(let i=0; i<obstacles.length; i++){
    obj.add(obstacles[i][0] + '-' + obstacles[i][1]);
  }
  for(let i=0; i<commands.length; i++){
    if(commands[i] == -1) der = (der+1)%4;
    if(commands[i] == -2) der = (der+3)%4;
    if(commands[i] > 0){
      while(commands[i]){
        let nextx = endx + dx[der];
        let nexty = endy + dy[der];
        if(obj.has(nextx + '-' + nexty)) break;
        endx = nextx;
        endy = nexty;
        commands[i]--;
      }
      result = Math.max(result, endx * endx + endy * endy);
    }
  }
  return result;
};

// @lc code=end

