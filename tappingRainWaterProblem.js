/*
Trapping rainwater problem: Find the maximum amount of water that can be trapped within a given set of bars where each bar’s width is 1 unit.
For example,
 
Input: An array containing height of bars {7, 0, 4, 2, 5, 0, 6, 4, 0, 5}

Trapping Rain Water bars

The maximum amount of water that can be trapped is 25, as shown below.
[0, 6, 2, 4, 1, 6, 0, 1, 5, 0]

*/

const defaultInput = [7, 0, 4, 2, 5, 0, 6, 4, 0, 5] ;

const tappingRainWaterProblem = (input = defaultInput) => {
    let rainWater = 0;
    const sortedInput = [...input];
    sortedInput.sort((a,b) => a<b? 1 : -1);
    let i =0;
    let prevSlotIndex, nextSlotIndex = 0;
    while(nextSlotIndex !== input.length-1) {
        prevSlotIndex = nextSlotIndex;
        nextSlotIndex = nextSlotIndex + input.slice(nextSlotIndex).indexOf(sortedInput[i]);
        // console.log(`${prevSlotIndex}       ${nextSlotIndex}`);
        let lowNumber = input[nextSlotIndex] - input[prevSlotIndex] > 0 ? prevSlotIndex : nextSlotIndex;
        for (var j = prevSlotIndex ; j < nextSlotIndex ; j++ ) {
            if(j > lowNumber && input[lowNumber] - input[j] < 0){
                lowNumber = j;
            }
            // console.log((input[lowNumber] - input[j] > 0 ? input[lowNumber] - input[j] : 0));
            rainWater = rainWater + (input[lowNumber] - input[j] > 0 ? input[lowNumber] - input[j] : 0);
        }
        i++;
    }
    return rainWater;
};

console.log(tappingRainWaterProblem());
console.log(tappingRainWaterProblem([7, 0, 4, 2, 5, 8, 6, 4, 0, 5])); // 23  [0, 7, 3, 5, 2, 0, 0, 1, 5, 0]
console.log(tappingRainWaterProblem([7, 0, 4, 2, 5, 8, 6, 4, 10, 9])); // 23  [0, 7, 3, 5, 2, 0, 2, 4, 0, 0]