'use strict';
const value = 9;
const findSequence = (value)=>{
    const result = [];
    let sum = 0;
    let index = 1;
    while(sum<value){
        sum += index;
        result.push(index);
        index++;   
    }

    if(sum>value){
        const difference = sum - value;
        let valueSum = 0;
        while(difference>valueSum) {
            const remove = result.shift();
            valueSum+=remove;
            if(valueSum>difference){
                return null;
            }
        }
    }
    return result;
}
console.log(findSequence(value));