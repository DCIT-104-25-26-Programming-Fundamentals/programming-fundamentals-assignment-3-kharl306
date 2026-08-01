

const readlineSync = require("readline-sync");

// Array to store all student records
let students = [];

// Function to calculate average score
function calculateAverage(scores) {
    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}

// Function to add a student
function addStudent() {
    const name = readlineSync.question("Student name: ");
    const id = readlineSync.questionInt("Student ID: ");

    const numberOfScores = readlineSync.questionInt("How many scores? ");

    let scores = [];

    for (let i = 0; i < numberOfScores; i++) {
        scores.push(readlineSync.questionFloat(`Enter score ${i + 1}: `));
    }

    students.push({
        name: name,
        id: id,
        scores: scores
    });

    console.log(`Student "${name}" added successfully.`);
}

// Function to display all students
function displayStudents() {
    if (students.length === 0) {
        console.log("No student records available.");
        return;
    }

    console.log("\nStudent Records");
    console.log("-------------------------------------------------------------");

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        console.log(`Name   : ${student.name}`);
        console.log(`ID     : ${student.id}`);
        console.log(`Scores : ${student.scores.join(", ")}`);
        console.log(`Average: ${calculateAverage(student.scores).toFixed(2)}`);
        console.log("-------------------------------------------------------------");
    }
}

// Function to calculate average for one student
function calculateStudentAverage() {
    const id = readlineSync.questionInt("Enter student ID: ");

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            const average = calculateAverage(students[i].scores);
            console.log(`${students[i].name}'s average score: ${average.toFixed(2)}`);
            return;
        }
    }

    console.log("Error: Student ID not found.");
}

// Function to display menu
function showMenu() {
    console.log("\n================================");
    console.log("   STUDENT RECORD SYSTEM MENU");
    console.log("================================");
    console.log("1. Add student");
    console.log("2. Display all students");
    console.log("3. Calculate average score");
    console.log("4. Quit");
}

// Main function
function main() {
    let choice;

    do {
        showMenu();

        choice = readlineSync.questionInt("Enter your choice (1-4): ");

        switch (choice) {
            case 1:
                addStudent();
                break;

            case 2:
                displayStudents();
                break;

            case 3:
                calculateStudentAverage();
                break;

            case 4:
                console.log("Goodbye!");
                break;

            default:
                console.log("Error: Invalid menu choice.");
        }

    } while (choice !== 4);
}

// Run the program
main();
