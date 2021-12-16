/*
Input:
 
nums = [8, 7, 2, 5, 3, 1]
target = 10
 
Output:
 
Pair found (8, 2)
or
Pair found (7, 3)
 
 
Input:
 
nums = [5, 2, 6, 8, 1, 9]
target = 12
 
Output: Pair not found

*/


const defaultInput = [8, 7, 2, 5, 3, 1]; 
const defaultTarget = 10;

const getPairWithGivenSumInArray = (input = defaultInput, target = defaultTarget) => {
    const sortedArray = input.sort();
    const output = [];
    let leftIndex = 0;
    let  rightIndex = sortedArray.length -1;
    while(leftIndex < rightIndex) {
        if(sortedArray[leftIndex] + sortedArray[rightIndex] === target) {
            output.push([sortedArray[leftIndex], sortedArray[rightIndex]]);
            leftIndex++;
        }
        else if(sortedArray[leftIndex] + sortedArray[rightIndex] < target) {
            leftIndex++;
        }
        else if(sortedArray[leftIndex] + sortedArray[rightIndex] > target) {
            rightIndex--;
        }
    }
    return output;
};

console.log(getPairWithGivenSumInArray());
console.log(getPairWithGivenSumInArray([5, 2, 6, 8, 1, 9], 12));