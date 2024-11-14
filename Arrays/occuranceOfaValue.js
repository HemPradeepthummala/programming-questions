'use strict';
const arr = [1,2,3,4,5,6,7,8,1,1,1,2,3,2,2];
const key = 3;
const findOccurance = (arr, key) => {
  let occurance = 0
  for (let i = 0; i< arr.length; i++) {
    if(arr[i]===key){
      ++occurance;
    }
  }
  return occurance;
}
console.log(findOccurance(arr,key));