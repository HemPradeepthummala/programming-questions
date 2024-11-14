'use strict';
const arr = [-1];
const findSecondMaxValue = (arr) => {
  let max = arr[0];
  let secMax = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){
      max = arr[i]
    }
    if(arr[i]>secMax&&arr[i]<max){
      secMax = arr[i]
    }
  }
  return secMax;
}
console.log(findSecondMaxValue(arr))