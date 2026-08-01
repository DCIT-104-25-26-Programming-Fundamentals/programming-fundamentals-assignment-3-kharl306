

const readlineSync = require('readline-sync');

// Function to read a matrix
function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question(`Enter row ${i + 1}: `)
            .split(' ')
            .map(Number);

        matrix.push(row);
    }

    return matrix;
}

// Function to display a matrix
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

// Part A: Transpose a matrix
function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transpose = [];

    for (let j = 0; j < cols; j++) {
        transpose[j] = [];

        for (let i = 0; i < rows; i++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    return transpose;
}

// Part B: Add two matrices
function addMatrices(matrix1, matrix2) {
    let rows = matrix1.length;
    let cols = matrix1[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        result[i] = [];

        for (let j = 0; j < cols; j++) {
            result[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return result;
}

// Part C: Multiply two matrices
function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < colsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < colsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

// Main function
function main() {

    // ==========================
    // Part A - Transpose
    // ==========================
    console.log("=== PART A: Matrix Transpose ===");

    let rows = readlineSync.questionInt("Enter number of rows: ");
    let cols = readlineSync.questionInt("Enter number of columns: ");

    let matrix = readMatrix(rows, cols);

    console.log("\nOriginal Matrix:");
    printMatrix(matrix);

    let transposed = transposeMatrix(matrix);

    console.log("\nTransposed Matrix:");
    printMatrix(transposed);

    // ==========================
    // Part B - Addition
    // ==========================
    console.log("\n=== PART B: Matrix Addition ===");

    rows = readlineSync.questionInt("Enter number of rows: ");
    cols = readlineSync.questionInt("Enter number of columns: ");

    console.log("Enter Matrix 1");
    let matrix1 = readMatrix(rows, cols);

    console.log("Enter Matrix 2");
    let matrix2 = readMatrix(rows, cols);

    let sum = addMatrices(matrix1, matrix2);

    console.log("\nResult:");
    printMatrix(sum);

    // ==========================
    // Part C - Multiplication
    // ==========================
    console.log("\n=== PART C: Matrix Multiplication ===");

    let m = readlineSync.questionInt("Enter rows of Matrix A: ");
    let n = readlineSync.questionInt("Enter columns of Matrix A: ");

    console.log("Enter Matrix A");
    let matrixA = readMatrix(m, n);

    let rowsB = readlineSync.questionInt("Enter rows of Matrix B: ");

    if (rowsB !== n) {
        console.log("Error: Number of rows in Matrix B must equal the number of columns in Matrix A.");
        return;
    }

    let p = readlineSync.questionInt("Enter columns of Matrix B: ");

    console.log("Enter Matrix B");
    let matrixB = readMatrix(rowsB, p);

    let product = multiplyMatrices(matrixA, matrixB);

    console.log("\nProduct Matrix:");
    printMatrix(product);
}

// Run the program
main();
