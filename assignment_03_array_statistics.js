// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// Array Statistics Calculator
// =============================================================================

const readlineSync = require("readline-sync");

// Function to calculate the sum
function getSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// Function to calculate the average
function getAverage(numbers) {
    return getSum(numbers) / numbers.length;
}

// Function to find the maximum value
function getMaximum(numbers) {
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// Function to find the minimum value
function getMinimum(numbers) {
    let min = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

    return min;
}

// Main function
function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    if (n <= 0) {
        console.log("Error: Number of values must be greater than 0.");
        return;
    }

    const numbers = [];

    for (let i = 0; i < n; i++) {
        numbers[i] = readlineSync.questionInt(`Enter number ${i + 1}: `);
    }

    console.log("\nResults:");
    console.log("Sum:    ", getSum(numbers));
    console.log("Average:", getAverage(numbers));
    console.log("Maximum:", getMaximum(numbers));
    console.log("Minimum:", getMinimum(numbers));
}

// Run the program
main();
