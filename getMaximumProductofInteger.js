/*

Given an integer array, find the maximum product of two integers in it.
For example, consider array {-10, -3, 5, 6, -2}. The maximum product is the (-10, -3) or (5, 6) pair.

*/

const defaultInput = [-10, -3, 5, 6, -2] ;

const getMaximumProductofInteger = (input = defaultInput) => {
    const sortedInput = input.sort((a, b) => a > b ? 1 : -1);
    console.log(sortedInput);
    if ((sortedInput[0] * sortedInput[1]) > (sortedInput[sortedInput.length-1] * sortedInput[sortedInput.length-2])){
        return [sortedInput[0], sortedInput[1]]
    } else {
        return [sortedInput[sortedInput.length-1], sortedInput[sortedInput.length-2]]
    }
};

console.log(getMaximumProductofInteger());