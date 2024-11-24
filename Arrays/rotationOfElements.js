'use strict';

//rotate to right

const array = [3,4,5,2,1,7];
const shiftValue = 2;
const rotateElements = (array, k) => {
    const arraySliced =  array.splice(k);
    const resultantArray = [...arraySliced,...array];
    return resultantArray;
};

console.log(rotateElements(array,shiftValue));