'use strict';
const arr = [2, 3, 4, 5, 2, 2, 2, 5, 4, 4, 8, 8];
// const findFrequency = (arr) => {
//   const frequency = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (Object.keys(frequency).includes(arr[i])) {
//       continue;
//     }
//     let count = 0;
//     frequency[arr[i]] = count;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         frequency[arr[i]] = ++count;
//       }
//     }
//   }
//   return frequency;
// }

const findFrequency = (arr) => {
  const frequency = {};
  for (let i = 0; i<arr.length; i++) {
    if(frequency[arr[i]]){
      ++frequency[arr[i]];
    } else {
      frequency[arr[i]] = 1;
    }
  }
  return frequency;
}

console.log(findFrequency(arr));