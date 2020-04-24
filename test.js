// function cutRope(number)
// {
//     // write code here
//   if(number == 4) return number;
//   else if(number < 4) return number-1;
//   else return 3 * cut(number-3);
// }
// function cut(number){
//   if(number <= 4) return number;
//   else return 3 * cut(number-3);
// }
// 字符串解压
// let str = "HG[10|B[1|CA]]F";
// function decode(str){
//   let res = '';
//   let temp = '';
//   let count = 0;
//   for(let val of str){
//     if(val == '['){
//       if(count > 0) temp += val;
//       count++;
//     }
//     else if(val == ']'){
//       count--;
//       if(count == 0){
//         res += handle(temp);
//         temp = '';
//       }else{
//         temp += val;
//       }
//     }else if(count > 0) temp += val;
//     else res += val;
//   }
//   return res;
// }
// function handle(str){
//   console.log(str);
//   let res = '';
//   let temp = '';
//   let count = 0;
//   let num = 0;
//   let s = '';
//   let flag = false;
//   for(let val of str){
//     if(val == '|' && !flag) flag = true;
//     else if(flag){
//       if(val == '['){
//         if(count > 0) temp += val;
//         count++;
//       }
//       else if(val == ']'){
//         count--;
//         if(count == 0){
//           s += handle(temp);
//           temp = '';
//         }else{
//           temp += val;
//         }
//       }else if(val == ']' && count > 0) count--;
//       else if(count > 0) temp += val;
//       else s += val;
//     }else num = num*10 + parseInt(val);
//   }
//   while(num--){
//     res += s;
//   }
//   return res;
// }
// console.log(decode(str));
// 
// 逛街
// let arr = [5, 3, 8, 3, 2, 5];
// function canLook(arr){
//   let res = [];
//   for(let i=0; i<arr.length; i++){
//     let right, left;
//     if(i == 0){
//       left = 0;
//     }else{
//       let j = i - 1;
//       let temp = arr[j];
//       left = 1;
//       while(j--){
//         if(j < 0) break;
//         if(arr[j] > temp){
//           left++;
//           temp = arr[j];
//         }
//       }
//     }
//     if(i == arr.length-1){
//       right = 0;
//     }else{
//       let j = i + 1;
//       let temp = arr[j];
//       right = 1;
//       while(j++){
//         if(j >= arr.length) break;
//         if(arr[j] > temp){
//           right++;
//           temp = arr[j];
//         }
//       }
//     }
//     res.push(left + right + 1)
//   }
//   return res;
// }
// console.log(canLook(arr));
// 代金券组合
// 65
// 4 50 30 20 5
// let sum = 888;
// let arr = [10, 1, 3, 5, 7, 9, 12, 13, 15, 17, 20];
// function compose(sum, arr){
//   arr.sort((a, b)=>a - b);
//   console.log(...arr);
//   let res = new Array(sum+1).fill(Infinity);
//   for(let i=0; i<arr.length; i++){
//     for(let j=1; j<=sum; j++){
//       if(arr[i] > j) continue;
//       else if(j % arr[i] == 0) res[j] = Math.min(res[j], j / arr[i]);
//       else if(res[j - arr[i]] == Infinity) continue;
//       else res[j] = Math.min(res[j - arr[i]] + 1, res[j]);
//     }
//     console.log(res[sum]);
//   }
//   if(res[sum] == Infinity) return 'Impossible';
//   return res[sum];
// }
// console.log(compose(sum, arr));
// 迷宫寻路
// 3 3
// 1 3 1
// 1 5 1
// 4 2 1
// let arr = [[1, 3, 1],
//            [1, 5, 1],
//            [4, 2, 1]];
// let m = n = 3;
// function findWay(m, n, arr){
//   let res = new Array(n).fill(0);
//   for(let i=0; i<m; i++){
//     for(let j=0; j<n; j++){
//       if(j == 0){
//         res[j] += arr[i][j];
//         continue;
//       }
//       if(i == 0){
//         res[j] += res[j-1] + arr[i][j];
//         continue;
//       }
//       res[j] = Math.min(res[j-1], res[j]) + arr[i][j];
//     }
//     console.log(res);
//   }
//   return res[n-1];
// }
// console.log(findWay(m, n, arr));

// function jinzhi(){

// }
//
// function fibo(num){
//   let m = 0;
//   let n = 1;
//   while(n <= num){
//     let temp = m;
//     m = n;
//     n = n + temp;
//   }
//   let count = 0;
//   console.log(m, n);
//   for(let i=m, j=n; i<j; i++, j--){
//     if(i==num || j==num) return count;
//     else count++;
//   }
// }
// console.log(fibo(3));
// abcdefg
// BCDEFGH

// function encrypt(res){  // 编码
//   let pwd = '';
//   for(let i=0; i<res.length; i++){
//       let code = res[i].charCodeAt();
//       if(code >= 97 && code < 122) pwd += String.fromCharCode(code+1).toUpperCase();
//       else if(code == 122) pwd += 'A';
//       else if(code >= 65 && code < 90) pwd += String.fromCharCode(code+1).toLowerCase();
//       else if(code == 90) pwd += 'a';
//       else if(code >= 48 && code < 57) pwd += String.fromCharCode(code+1);
//       else if(code == 57) pwd += 0;
//   }
//   console.log(pwd);
// }
// encrypt('123abc');
// function unEncrypt(pwd){  // 解码
//   let res = '';
//   for(let i=0; i<pwd.length; i++){
//       let code = pwd[i].charCodeAt();
//       if(code > 97 && code <= 122) res += String.fromCharCode(code-1).toUpperCase();
//       else if(code == 97) res += 'Z';
//       else if(code > 65 && code <= 90) res += String.fromCharCode(code-1).toLowerCase();
//       else if(code == 65) res += 'z';
//       else if(code > 48 && code <= 57) res += String.fromCharCode(code-1);
//       else if(code == 48) res += 9;
//   }
//   console.log(res);
// }
// unEncrypt('123abc');

// let arr = [[1345, 2584],[2584, 683],[2584, 1345],[683, 1345],[683, 1345],[2584, 683]];
let arr = [[1, 1],[1, 1],[1, 1],[1, 1],[1, 1],[1, 1]];
// let arr = [[1234, 4567],[1234, 4567],[4567, 4321],[4322, 4567],[4321, 1234],[4321, 1234]];
function isChangfangti(arr){
  let obj = {};
  for(let i=0; i<arr.length; i++){
    if(arr[i][0] <= arr[i][1]){
      if(obj[arr[i][0]+'-'+arr[i][1]]) obj[arr[i][0]+'-'+arr[i][1]]++;
      else obj[arr[i][0]+'-'+arr[i][1]] = 1;
    }else{
      if(obj[arr[i][1]+'-'+arr[i][0]]) obj[arr[i][1]+'-'+arr[i][0]]++;
      else obj[arr[i][1]+'-'+arr[i][0]] = 1;
    }
  }
  let sum = 0;
  let keys = new Set();
  for(let key in obj){
    if(obj[key] !== 2 && obj[key] !== 4 && obj[key] !== 6) return false;
    sum++;
    let arr = key.split('-')
    keys.add(arr[0]);
    keys.add(arr[1]);
  }
  console.log(obj, keys);
  return sum <= 3 && keys.size <= 3 ? true : false;
}
console.log(isChangfangti(arr));

// 5 2
// 1 2 3 4 5
// 2
// 3
// 5
// function computeLost(m, count, arr, q){
//   arr.sort((a, b)=>a - b);
//   let sum = 0;
//   let day = 1;
//   for(let i=q-1; i>=0; i-=count){
//     let lost = 0;
//     for(let j=0; j<count; j++){
//       if(i-j < 0) break;
//       lost += arr[i-j];
//     }
//     console.log(lost);
//     sum += lost*day;
//     day++;
//   }
//   return sum;
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(computeLost(5, 2, arr, 5));








