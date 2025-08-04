// Day 14 Project: Age Eligibility Checker
// This file demonstrates the use of if, else if, and else statements.

// --- DOM Element References ---
const ageInput = document.getElementById("ageInput");
const checkBtn = document.getElementById("checkBtn");
const resultsDiv = document.getElementById("resultsDiv");

// --- Main Logic Function ---

/**
 * Checks a given age for eligibility for various activities and
 * updates the UI with the results.
 */
function checkAgeEligibility() {
  // Get the value from the input and convert it to an integer.
  const age = parseInt(ageInput.value, 10);
  let message = "";

  // Check if the input is a valid number.
  if (isNaN(age) || age < 0) {
    message = "Please enter a valid age.";
    resultsDiv.style.color = "#ef4444"; // Red for error
  } else {
    // Use an if/else if/else statement to check eligibility.
    if (age >= 65) {
      message = "You are a senior citizen and are eligible for all activities.";
      resultsDiv.style.color = "#a7f3d0";
    } else if (age >= 18) {
      message = "You are an adult, eligible to vote and drive.";
      resultsDiv.style.color = "#a7f3d0";
    } else if (age >= 16) {
      message = "You are a teenager, eligible to drive, but not to vote.";
      resultsDiv.style.color = "#a7f3d0";
    } else {
      message = "You are a minor and not eligible for voting or driving.";
      resultsDiv.style.color = "#fcd34d"; // Yellow for minor
    }
  }

  // Update the results display with the generated message.
  resultsDiv.textContent = message;
}

// --- Event Listeners and Initial Setup ---

// Add a click event listener to the button to trigger the check.
checkBtn.addEventListener("click", checkAgeEligibility);

// Add a keypress event listener to the input for accessibility and user convenience.
ageInput.addEventListener("keypress", (event) => {
  // Check if the key pressed is "Enter" (key code 13 or key property 'Enter')
  if (event.key === "Enter") {
    checkAgeEligibility();
  }
});
