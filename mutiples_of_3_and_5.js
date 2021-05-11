// If we list all the natural numbers below 10 that are multiples of 3 and 5 we get 3, 5, 6, and 9.
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below the provided parameter value number.

let multiplesOf3and5 = (number) => {

    let sum = 0

    let i;
    // loops through each number and checks if it is divisable by 3 or 5
    for (i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            // if it is take the current sum and add it to the current number in the index
            sum = sum + i;
        }
    }

    return sum;
}

console.log(multiplesOf3and5(19564));