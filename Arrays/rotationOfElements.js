'use strict';

const array = [1,2,3,4,5];
const shiftValue = 2;
//rotate to right
// const rotateElements = (array, k) => {
// const arraySliced =  array.splice(k);
// const resultantArray = [...arraySliced,...array];
// return resultantArray;
// };

// rotate to left
// const rotateElements = (array,k) =>{
//     const arraySliced =  array.splice(-k);
//     const resultantArray = [...arraySliced,...array];
//     return resultantArray;
// };

// reverse
const reverse = (array, start=0, end=4) => {
    while (start < end) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
    return array
};

// // rotate to left
// const rotateElements = (array, k) => {
    //     reverse(array,0,array.length-1);
    //     reverse(array,k,array.length-1);
    //     reverse(array,0,k-1);
    //     return array;
    // };
    
//  //rotate to right
const rotateElements = (array, k) => {
    reverse(array,0,array.length-1);
    reverse(array,k+1,array.length-1);
    reverse(array,0,k);
    return array;
};

console.log(reverse(array))
console.log(rotateElements(array, shiftValue));