// Day 13 Project: Config File Simulator
// This file demonstrates the use of JSON.stringify() and JSON.parse()
// to convert a JavaScript object to a JSON string and back again.

// --- Sample Data ---
// This is our original JavaScript object. It can be converted to JSON.
const configObject = {
  appName: "Image Uploader",
  version: "1.0.2",
  isBeta: false,
  settings: {
    maxFileSizeMB: 5,
    allowedTypes: ["image/jpeg", "image/png"],
    theme: "dark",
  },
  lastUpdated: new Date().toISOString(), // JSON can handle strings, but not Date objects directly.
};

// --- DOM Element References ---
const originalJsObjectDiv = document.getElementById("originalJsObject");
const convertedDataDiv = document.getElementById("convertedData");
const stringifyBtn = document.getElementById("stringifyBtn");
const parseBtn = document.getElementById("parseBtn");

// --- Global Variables ---
// We'll store the JSON string here after stringifying the object.
let currentJsonString = "";

// --- Main Logic Functions ---

/**
 * Converts the JavaScript object to a JSON string.
 * This is the "saving" or "sending" part of the simulation.
 */
function convertObjectToJson() {
  console.log("Converting JavaScript object to JSON string...");
  try {
    // Use JSON.stringify() to convert the JS object to a JSON string.
    // We use 'null, 2' for indentation to make it human-readable.
    currentJsonString = JSON.stringify(configObject, null, 2);

    // Update the UI to display the JSON string
    convertedDataDiv.textContent = currentJsonString;

    console.log(
      "Conversion successful! JSON string stored in 'currentJsonString'."
    );
  } catch (error) {
    console.error("Error during JSON stringification:", error);
    convertedDataDiv.textContent = "Error converting object to JSON.";
  }
}

/**
 * Parses the JSON string back into a JavaScript object.
 * This is the "loading" or "receiving" part of the simulation.
 */
function parseJsonToObject() {
  console.log("Parsing JSON string back into a JavaScript object...");
  if (!currentJsonString) {
    console.warn("No JSON string to parse. Please convert the object first.");
    convertedDataDiv.textContent = "Please convert to JSON first.";
    return;
  }

  try {
    // Use JSON.parse() to convert the JSON string back to a JS object.
    const parsedObject = JSON.parse(currentJsonString);

    // Update the UI to display the new JavaScript object.
    // We use JSON.stringify() again for display purposes to show the object structure.
    convertedDataDiv.textContent = JSON.stringify(parsedObject, null, 2);

    console.log("Parsing successful! Object is now:", parsedObject);
  } catch (error) {
    console.error("Error during JSON parsing:", error);
    convertedDataDiv.textContent = "Error parsing JSON string. Invalid format.";
  }
}

// --- UI Initialization and Event Listeners ---

/**
 * Renders the original JavaScript object to the UI on page load.
 */
function renderOriginalObject() {
  // Use JSON.stringify() with indentation to make the object readable in the UI
  originalJsObjectDiv.textContent = JSON.stringify(configObject, null, 2);
}

// Add click event listeners to the buttons
stringifyBtn.addEventListener("click", convertObjectToJson);
parseBtn.addEventListener("click", parseJsonToObject);

// Initial setup on page load
document.addEventListener("DOMContentLoaded", () => {
  renderOriginalObject();
});
