// Day 04 Project: Interactive Function Caller
// This file contains the interactive project logic.
// All detailed explanations and practice set solutions are in README.md.

// --- Helper Functions for DOM Manipulation ---
function getInputValue(id, type = "text") {
  const inputElement = document.getElementById(id);
  if (inputElement) {
    if (type === "number") {
      return parseFloat(inputElement.value);
    }
    return inputElement.value;
  }
  return null;
}

function displayResult(elementId, result) {
  const outputElement = document.getElementById(elementId);
  if (outputElement) {
    outputElement.textContent = `Result: ${result}`;
  }
}

function showGlobalMessage(message, isError = true) {
  const globalMessageElement = document.getElementById("globalMessage");
  if (globalMessageElement) {
    globalMessageElement.textContent = message;
    globalMessageElement.classList.remove(
      "hidden",
      "text-green-700",
      "bg-green-100",
      "border-green-300",
      "text-red-500",
      "bg-red-100",
      "border-red-300"
    ); // Clear previous states
    globalMessageElement.classList.add(
      isError ? "text-red-500" : "text-green-700",
      isError ? "bg-red-100" : "bg-green-100",
      isError ? "border-red-300" : "border-green-300"
    );
    globalMessageElement.classList.remove("hidden"); // Make sure it's visible
    setTimeout(() => {
      globalMessageElement.classList.add("hidden");
    }, 5000); // Hide after 5 seconds
  }
}

// --- 1. Basic Math Functions (Function Declarations) ---

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
    showGlobalMessage("Error: Cannot divide by zero!", true);
    return "Error"; // Return an error string or handle differently
  }
  return a / b;
}

// Event Listeners for Math Functions
document.getElementById("addBtn").addEventListener("click", () => {
  const num1 = getInputValue("mathNum1", "number");
  const num2 = getInputValue("mathNum2", "number");
  if (isNaN(num1) || isNaN(num2)) {
    showGlobalMessage("Please enter valid numbers for math operations.", true);
    return;
  }
  displayResult("mathResult", add(num1, num2));
});

document.getElementById("subtractBtn").addEventListener("click", () => {
  const num1 = getInputValue("mathNum1", "number");
  const num2 = getInputValue("mathNum2", "number");
  if (isNaN(num1) || isNaN(num2)) {
    showGlobalMessage("Please enter valid numbers for math operations.", true);
    return;
  }
  displayResult("mathResult", subtract(num1, num2));
});

document.getElementById("multiplyBtn").addEventListener("click", () => {
  const num1 = getInputValue("mathNum1", "number");
  const num2 = getInputValue("mathNum2", "number");
  if (isNaN(num1) || isNaN(num2)) {
    showGlobalMessage("Please enter valid numbers for math operations.", true);
    return;
  }
  displayResult("mathResult", multiply(num1, num2));
});

document.getElementById("divideBtn").addEventListener("click", () => {
  const num1 = getInputValue("mathNum1", "number");
  const num2 = getInputValue("mathNum2", "number");
  if (isNaN(num1) || isNaN(num2)) {
    showGlobalMessage("Please enter valid numbers for math operations.", true);
    return;
  }
  displayResult("mathResult", divide(num1, num2));
});

// --- 2. Greeting Function (Function Expression) ---
const getGreeting = function (name) {
  return `Hello, ${name}!`;
};

document.getElementById("greetBtn").addEventListener("click", () => {
  const name = getInputValue("greetName");
  if (!name) {
    showGlobalMessage("Please enter a name for the greeting.", true);
    return;
  }
  displayResult("greetingResult", getGreeting(name));
});

// --- 3. Default Parameters Demo (Function Declaration with Default) ---
function greetWithDefault(name = "Guest") {
  return `Welcome, ${name}!`;
}

document.getElementById("defaultParamBtn").addEventListener("click", () => {
  const name = getInputValue("defaultParamName");
  // If input is empty, the default parameter will automatically apply
  displayResult(
    "defaultParamResult",
    greetWithDefault(name === "" ? undefined : name)
  );
  // Pass undefined if string is empty to ensure default is used
});

// --- 4. Rest Parameters Demo (Arrow Function with Rest) ---
const sumAllNumbers = (...numbers) => {
  if (numbers.length === 0) {
    return 0;
  }
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

document.getElementById("restParamBtn").addEventListener("click", () => {
  const numbersString = getInputValue("restParamNumbers");
  if (!numbersString) {
    showGlobalMessage("Please enter numbers for sum (e.g., 10,20,30).", true);
    return;
  }
  // Split the string by comma, trim whitespace, and convert to numbers
  const numbersArray = numbersString
    .split(",")
    .map((numStr) => parseFloat(numStr.trim()));

  // Filter out any NaN values that might result from invalid input
  const validNumbers = numbersArray.filter((num) => !isNaN(num));

  if (validNumbers.length !== numbersArray.length) {
    showGlobalMessage(
      "Some inputs were not valid numbers and were ignored.",
      false
    ); // Not an error, just a warning
  }

  displayResult("restParamResult", sumAllNumbers(...validNumbers)); // Use spread operator to pass array as individual arguments
});

// Initial display clear on load
document.addEventListener("DOMContentLoaded", () => {
  displayResult("mathResult", 0);
  displayResult("greetingResult", "");
  displayResult("defaultParamResult", "");
  displayResult("restParamResult", "");
});
