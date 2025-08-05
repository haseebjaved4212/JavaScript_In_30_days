// Day 08 Project: Simple Random Quote Generator
// This file contains the interactive project logic.
// All detailed explanations and practice set solutions are in README.md.

// --- API Endpoint ---
// Using dummyjson.com for random quotes. We'll fetch a list and pick one randomly.
const quoteApiUrl = "https://dummyjson.com/quotes?limit=30";

// --- DOM Element References ---
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const newQuoteBtn = document.getElementById("newQuoteBtn");
const loadingIndicator = document.getElementById("loadingIndicator");

// --- Functions ---

/**
 * Fetches a random quote from the API and updates the UI.
 * Uses async/await for cleaner asynchronous code.
 */
async function fetchRandomQuote() {
  // Show loading indicator and clear previous content
  loadingIndicator.classList.remove("hidden");
  quoteText.textContent = "";
  quoteAuthor.textContent = "";
  newQuoteBtn.disabled = true; // Disable button during fetch

  try {
    // Step 1: Fetch data from the API (which returns a list of quotes)
    const response = await fetch(quoteApiUrl);

    // Step 2: Check if the HTTP response was successful (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Step 3: Parse the JSON response body
    const data = await response.json();

    // Step 4: Select a random quote from the fetched list
    if (data.quotes && data.quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.quotes.length);
      const randomQuote = data.quotes[randomIndex];

      // Step 5: Update the DOM with the selected quote and author
      quoteText.textContent = randomQuote.quote; // Note: 'quote' property for the text
      quoteAuthor.textContent = `- ${randomQuote.author}`;
    } else {
      // Handle case where API returns no quotes
      quoteText.textContent = "No quotes found from the API.";
      quoteAuthor.textContent = "";
    }
  } catch (error) {
    // Step 6: Handle any errors that occurred during fetch or parsing
    console.error("Error fetching quote:", error);
    quoteText.textContent =
      "Oops! Failed to load a quote. Please check your internet connection or try again.";
    quoteAuthor.textContent = ""; // Clear author on error
  } finally {
    // Step 7: This block always executes, regardless of success or failure
    loadingIndicator.classList.add("hidden"); // Hide loading indicator
    newQuoteBtn.disabled = false; // Re-enable the button
  }
}

// --- Event Listeners ---

// Add click listener to the "New Quote" button
newQuoteBtn.addEventListener("click", fetchRandomQuote);

// --- Initial Setup on Page Load ---
// Fetch a quote automatically when the page finishes loading
document.addEventListener("DOMContentLoaded", fetchRandomQuote);
