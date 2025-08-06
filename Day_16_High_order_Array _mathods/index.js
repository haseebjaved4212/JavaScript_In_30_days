// Day 10 Project: Student Grade Analyzer
// This file demonstrates the use of forEach(), map(), filter(), and reduce() array methods.

// --- Sample Data ---
// A hardcoded array of student objects.
const students = [
  { id: 1, name: "Alice", score: 88 },
  { id: 2, name: "Bob", score: 92 },
  { id: 3, name: "Charlie", score: 75 },
  { id: 4, name: "Diana", score: 55 },
  { id: 5, name: "Eve", score: 68 },
  { id: 6, name: "Frank", score: 95 },
  { id: 7, name: "Grace", score: 40 },
];

// --- DOM Element References ---
const originalDataDiv = document.getElementById("originalData");
const resultsPanelDiv = document.getElementById("resultsPanel");
const calculateGradesBtn = document.getElementById("calculateGradesBtn");
const filterPassingBtn = document.getElementById("filterPassingBtn");
const calculateAverageBtn = document.getElementById("calculateAverageBtn");

// --- Helper Functions ---

/**
 * Renders the original students array to the UI.
 */
function renderOriginalData() {
  // Use JSON.stringify for a readable, formatted output.
  originalDataDiv.textContent = JSON.stringify(students, null, 2);
}

/**
 * Renders the results of a given analysis to the UI.
 * @param {string} title The title for the results panel.
 * @param {any} data The data to display.
 */
function renderResults(title, data) {
  let content;
  if (typeof data === "number") {
    // For the average score, display it as a simple formatted string.
    content = `<div class="average-score-display">Average Score: ${data.toFixed(
      2
    )}</div>`;
  } else {
    // For arrays and objects, use JSON.stringify for a formatted view.
    content = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
  }

  // Update the results panel with the new content and title.
  resultsPanelDiv.innerHTML = `
        <h2 class="text-white">${title}</h2>
        ${content}
    `;
}

// --- Main Logic Functions for each Array Method ---

/**
 * Uses the map() method to calculate and assign letter grades to each student.
 */
function calculateLetterGrades() {
  console.log("Using map() to calculate letter grades...");

  // map() transforms each student object into a new object with an added 'grade' property.
  const studentsWithGrades = students.map((student) => {
    let grade;
    if (student.score >= 90) {
      grade = "A";
    } else if (student.score >= 80) {
      grade = "B";
    } else if (student.score >= 70) {
      grade = "C";
    } else if (student.score >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }
    // Use spread operator (...) to create a new object that includes all original
    // student properties plus the new 'grade' property.
    return { ...student, grade };
  });

  renderResults("Students with Letter Grades (using map)", studentsWithGrades);
  console.log("Resulting array with grades:", studentsWithGrades);
}

/**
 * Uses the filter() method to get a new array of students who passed (score >= 60).
 */
function filterPassingStudents() {
  console.log("Using filter() to get passing students...");

  // filter() returns a new array with elements that pass the test (score >= 60).
  const passingStudents = students.filter((student) => student.score >= 60);

  renderResults("Passing Students (using filter)", passingStudents);
  console.log("Resulting array of passing students:", passingStudents);
}

/**
 * Uses the reduce() method to calculate the average score of all students.
 */
function calculateAverageScore() {
  console.log("Using reduce() to calculate average score...");

  // Step 1: Use reduce() to sum all scores.
  const totalScore = students.reduce((accumulator, student) => {
    return accumulator + student.score;
  }, 0); // The initial value of the accumulator is 0.

  // Step 2: Calculate the average. Handle cases where the array might be empty.
  const averageScore = students.length > 0 ? totalScore / students.length : 0;

  renderResults("Average Score (using reduce)", averageScore);
  console.log("Calculated average score:", averageScore);
}

// --- Event Listeners and Initial Setup ---

// Add event listeners to the buttons to trigger the respective functions.
calculateGradesBtn.addEventListener("click", calculateLetterGrades);
filterPassingBtn.addEventListener("click", filterPassingStudents);
calculateAverageBtn.addEventListener("click", calculateAverageScore);

// Render the initial data when the page loads.
document.addEventListener("DOMContentLoaded", () => {
  renderOriginalData();
});
