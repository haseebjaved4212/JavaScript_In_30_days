// Day 09 Project: Simple Error-Resilient Calculator
// This file contains the interactive project logic, focusing on error handling.


// --- DOM Element References ---
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultDisplay = document.getElementById("resultDisplay");
const errorDisplay = document.getElementById("errorDisplay");
const operationButtons = document.querySelectorAll(".operation-btn"); // Selects all buttons with this class

// --- Helper Functions for UI Display ---

/**
 * Displays the calculation result and hides any error messages.
 * @param {string} message - The message to display as a result.
 */
function displayResult(message) {
  resultDisplay.textContent = message;
  resultDisplay.classList.remove("hidden"); // Show result area
  errorDisplay.classList.add("hidden"); // Hide error area
}

/**
 * Displays an error message and hides any result messages.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
  errorDisplay.textContent = message;
  errorDisplay.classList.remove("hidden"); // Show error area
  resultDisplay.classList.add("hidden"); // Hide result area
}

// --- Input Validation Function ---

/**
 * Parses input values and validates if they are numbers.
 * Throws an Error if inputs are not valid numbers.
 * @returns {object} An object containing num1 and num2.
 * @throws {Error} If inputs are not valid numbers.
 */
function getNumbers() {
  // parseFloat attempts to convert string to a floating-point number
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Check if either conversion resulted in NaN (Not a Number)
  if (isNaN(num1) || isNaN(num2)) {
    // Throw a custom Error object with a descriptive message
    console.error("Validation Error: Non-numeric input detected."); // For developer console
    throw new Error("Invalid input: Please enter valid numbers."); // User-friendly message
  }
  return { num1, num2 };
}

// --- Arithmetic Operation Functions ---

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

/**
 * Divides two numbers. Throws an Error if division by zero is attempted.
 * @param {number} a - The numerator.
 * @param {number} b - The denominator.
 * @returns {number} The result of the division.
 * @throws {Error} If division by zero is attempted.
 */
function divide(a, b) {
  if (b === 0) {
    // Throw a specific error for division by zero
    console.error("Calculation Error: Attempted division by zero."); // For developer console
    throw new Error("Cannot divide by zero."); // User-friendly message
  }
  return a / b;
}

// --- Event Listeners for Operation Buttons ---

// Iterate over each operation button and attach a click event listener
operationButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    let result; // Variable to store the calculation result

    // Use a try...catch block to gracefully handle potential errors
    try {
      // Attempt to get and validate numbers. This might throw an error.
      const { num1, num2 } = getNumbers();

      // Get the operation type from the button's data-operation attribute
      const operation = event.target.dataset.operation;

      // Perform the selected operation
      switch (operation) {
        case "add":
          result = add(num1, num2);
          break;
        case "subtract":
          result = subtract(num1, num2);
          break;
        case "multiply":
          result = multiply(num1, num2);
          break;
        case "divide":
          // The divide function itself might throw an error (e.g., division by zero)
          result = divide(num1, num2);
          break;
        default:
          // If an unknown operation somehow gets triggered
          throw new Error("Unknown operation.");
      }

      // If no errors occurred, display the result
      displayResult(`Result: ${result}`);
      // Log successful operation details to console for debugging/tracking
      console.log(
        `Operation successful: ${num1} ${operation} ${num2} = ${result}`
      );
    } catch (error) {
      // If any error was thrown in the try block, it will be caught here
      displayError(`Error: ${error.message}`); // Display user-friendly error message
      // Log the full error object to the console for detailed debugging
      console.error("Detailed error caught:", error);
    }
  });
});

// --- Initial Setup on Page Load ---
document.addEventListener("DOMContentLoaded", () => {
  // Hide both result and error displays initially
  resultDisplay.classList.add("hidden");
  errorDisplay.classList.add("hidden");
});
