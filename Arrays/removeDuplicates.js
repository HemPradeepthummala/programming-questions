'use strict';
const arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
const removeDuplicates = (array) => {
  const resultantArray = [];
  for (let i = 0; i < array.length; i++) {
    if(!resultantArray.includes(array[i])){
      resultantArray.push(array[i])
    }
  }
  return resultantArray;
}
console.log(removeDuplicates(arr));