/*
Find the largest number possible from a set of given numbers where the numbers append to each other in any order to form the largest number.

Input:  { 10, 68, 75, 7, 21, 12 }
 
Output: 77568211210

*/

const defaultInput = [ 10, 68, 75, 7, 21, 12] ;

const formLargestNumberAppend = (input = defaultInput) => {
    const sortedInput = input.sort((a, b) => {     
        return parseInt(a+''+b) < parseInt(b+''+a) ? 1 : -1
    });
    return sortedInput.join('');
};

console.log(formLargestNumberAppend());
