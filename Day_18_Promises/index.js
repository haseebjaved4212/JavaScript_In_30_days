// Day 18 Project: Fake API Data Fetcher
// This file demonstrates the core concepts of JavaScript Promises.

// --- DOM Element References ---
const successBtn = document.getElementById("successBtn");
const failBtn = document.getElementById("failBtn");
const statusDiv = document.getElementById("status");
const outputPre = document.getElementById("output");

// --- Core Promise Logic ---

/**
 * Creates and returns a new Promise that simulates an API call.
 * It resolves after 2 seconds on success, or rejects on failure.
 * @param {boolean} isSuccess - A flag to determine if the promise should resolve or reject.
 * @returns {Promise<string>} - A Promise that resolves with a message or rejects with an error.
 */
function fakeApiCall(isSuccess) {
  return new Promise((resolve, reject) => {
    // Simulate a network delay of 2 seconds
    setTimeout(() => {
      if (isSuccess) {
        const data = {
          message: "Data fetched successfully!",
          timestamp: new Date().toISOString(),
          payload: [1, 2, 3],
        };
        resolve(JSON.stringify(data, null, 2));
      } else {
        // Reject with a detailed error object
        reject(new Error("API call failed due to a network error."));
      }
    }, 2000);
  });
}

/**
 * Handles the Promise by setting up the .then(), .catch(), and .finally() blocks.
 * @param {boolean} isSuccess - A flag to pass to the fakeApiCall function.
 */
function handlePromise(isSuccess) {
  // 1. Update the UI to show a loading state
  statusDiv.textContent = "Loading...";
  statusDiv.classList.remove("success", "error");
  statusDiv.classList.add("loading");
  outputPre.textContent = ""; // Clear previous output

  // 2. Call the function that returns the Promise
  fakeApiCall(isSuccess)
    // 3. Handle a successful promise resolution
    .then((data) => {
      statusDiv.textContent = "Success!";
      statusDiv.classList.remove("loading");
      statusDiv.classList.add("success");
      outputPre.textContent = data;
    })
    // 4. Handle a rejected promise
    .catch((error) => {
      statusDiv.textContent = "Failed!";
      statusDiv.classList.remove("loading");
      statusDiv.classList.add("error");
      outputPre.textContent = `Error: ${error.message}`;
    })
    // 5. Run this block regardless of the outcome (for cleanup)
    .finally(() => {
      console.log("Promise has settled (either resolved or rejected).");
      // You might hide a loading spinner here, for example.
    });
}

// --- Event Listeners and Initial Setup ---

// Set up the button click handlers to trigger the Promise logic
successBtn.addEventListener("click", () => handlePromise(true));
failBtn.addEventListener("click", () => handlePromise(false));

// Log an initial message to the console
document.addEventListener("DOMContentLoaded", () => {
  console.log("Day 18 Project is ready. Click a button to begin.");
});
