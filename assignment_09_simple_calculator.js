// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// Console-Based Simple Calculator
// =============================================================================

const readlineSync = require("readline-sync");

// Arithmetic functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

function modulus(a, b) {
    if (b === 0) {
        return null;
    }
    return a % b;
}

function exponent(a, b) {
    return a ** b;
}

// Display menu
function showMenu() {
    console.log("\n============================");
    console.log("     SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// Main function
function main() {
    let choice;

    do {
        showMenu();

        choice = readlineSync.questionInt("Select an operation (1-7): ");

        if (choice >= 1 && choice <= 6) {
            const num1 = readlineSync.questionFloat("Enter first number : ");
            const num2 = readlineSync.questionFloat("Enter second number: ");

            let result;

            switch (choice) {
                case 1:
                    result = add(num1, num2);
                    console.log(`Result: ${num1} + ${num2} = ${result.toFixed(2)}`);
                    break;

                case 2:
                    result = subtract(num1, num2);
                    console.log(`Result: ${num1} - ${num2} = ${result.toFixed(2)}`);
                    break;

                case 3:
                    result = multiply(num1, num2);
                    console.log(`Result: ${num1} * ${num2} = ${result.toFixed(2)}`);
                    break;

                case 4:
                    result = divide(num1, num2);

                    if (result === null) {
                        console.log("Error: Cannot divide by zero.");
                    } else {
                        console.log(`Result: ${num1} / ${num2} = ${result.toFixed(2)}`);
                    }
                    break;

                case 5:
                    result = modulus(num1, num2);

                    if (result === null) {
                        console.log("Error: Cannot divide by zero.");
                    } else {
                        console.log(`Result: ${num1} % ${num2} = ${result.toFixed(2)}`);
                    }
                    break;

                case 6:
                    result = exponent(num1, num2);
                    console.log(`Result: ${num1} ** ${num2} = ${result.toFixed(2)}`);
                    break;
            }
        } else if (choice === 7) {
            console.log("Goodbye!");
        } else {
            console.log("Error: Invalid menu choice.");
        }

    } while (choice !== 7);
}

// Run the program
main();
