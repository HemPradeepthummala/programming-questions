'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 10;

const createTargetArray = (array, target) => {
    const result = [];
    const check = []
    for (const element of array) {
        if (array.includes(target - element)&&!check.includes(element)) {
            check.push(target-element);
            result.push([element, target - element]);
        }
    }
    return result;
};

console.log(createTargetArray(array, target));