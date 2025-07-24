// Day 03 Project: Loop Visualizer & Pattern Generator
// This file contains the interactive project logic.
// All detailed explanations and practice set solutions are in README.md.

// --- Helper Functions for DOM Manipulation ---
function getInputValue(id, type = "number") {
  const inputElement = document.getElementById(id);
  if (inputElement) {
    if (type === "number") {
      return parseFloat(inputElement.value);
    }
    return inputElement.value;
  }
  return null;
}

function displayOutput(elementId, content) {
  const outputElement = document.getElementById(elementId);
  if (outputElement) {
    outputElement.innerHTML = content; // Overwrite content
  }
}

function appendToOutput(elementId, content) {
  const outputElement = document.getElementById(elementId);
  if (outputElement) {
    outputElement.innerHTML += content + "\n"; // Append content with a newline
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

// --- For Loop Logic ---
document.getElementById("runForLoopBtn").addEventListener("click", () => {
  const start = getInputValue("forStart");
  const end = getInputValue("forEnd");
  const step = getInputValue("forStep");

  if (isNaN(start) || isNaN(end) || isNaN(step) || step === 0) {
    showGlobalMessage(
      "Please enter valid numbers for For Loop (step cannot be zero).",
      true
    );
    return;
  }

  let outputContent = "<h3>For Loop Output:</h3>";
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      outputContent += `Iteration: ${i}`;
    }
  } else {
    // Handle negative step for counting down
    for (let i = start; i >= end; i += step) {
      outputContent += `Iteration: ${i}`;
    }
  }
  displayOutput("forLoopOutput", outputContent);
});

document.getElementById("clearForLoopBtn").addEventListener("click", () => {
  displayOutput("forLoopOutput", "");
});

// --- While Loop Logic ---
document.getElementById("runWhileLoopBtn").addEventListener("click", () => {
  const startValue = getInputValue("whileStart");
  const conditionString = getInputValue("whileCondition", "text");
  const updateString = getInputValue("whileUpdate", "text");

  if (isNaN(startValue) || !conditionString || !updateString) {
    showGlobalMessage(
      "Please enter valid start number, condition, and update for While Loop.",
      true
    );
    return;
  }

  let outputContent = "<h3>While Loop Output:</h3>";
  let i = startValue; // Initialize the loop variable

  // Use a try-catch block for safety when evaluating dynamic code
  try {
    let iterations = 0;
    const maxIterations = 1000; // Safety break for potential infinite loops

    // Create a function from the condition and update strings
    // WARNING: Using `new Function()` with user input can be a security risk
    // in a real-world application. For this learning project, it's acceptable.
    const checkCondition = new Function("i", `return ${conditionString};`);
    const applyUpdate = new Function("i", `${updateString}; return i;`);

    while (checkCondition(i) && iterations < maxIterations) {
      outputContent += `Iteration: ${i}`;
      i = applyUpdate(i); // Apply the update and reassign i
      iterations++;
    }

    if (iterations >= maxIterations) {
      outputContent += `<span class="text-red-500">Loop stopped after ${maxIterations} iterations to prevent infinite loop. Check your condition/update!</span>`;
    }
  } catch (e) {
    showGlobalMessage(`Error in While Loop logic: ${e.message}`, true);
    displayOutput("whileLoopOutput", ""); // Clear output on error
    return;
  }

  displayOutput("whileLoopOutput", outputContent);
});

document.getElementById("clearWhileLoopBtn").addEventListener("click", () => {
  displayOutput("whileLoopOutput", "");
});

// --- Pattern Generator Logic ---
document.getElementById("generateSquareBtn").addEventListener("click", () => {
  const height = getInputValue("patternHeight");
  if (isNaN(height) || height <= 0 || !Number.isInteger(height)) {
    showGlobalMessage(
      "Please enter a positive integer for pattern height.",
      true
    );
    return;
  }

  let pattern = "<h3>Square Pattern:</h3><pre>"; // Use <pre> for pre-formatted text
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      pattern += "* ";
    }
    pattern += "\n"; // New line after each row
  }
  pattern += "</pre>";
  displayOutput("patternOutput", pattern);
});

document.getElementById("generateTriangleBtn").addEventListener("click", () => {
  const height = getInputValue("patternHeight");
  if (isNaN(height) || height <= 0 || !Number.isInteger(height)) {
    showGlobalMessage(
      "Please enter a positive integer for pattern height.",
      true
    );
    return;
  }

  let pattern = "<h3>Right Triangle Pattern:</h3><pre>"; // Use <pre> for pre-formatted text
  for (let i = 1; i <= height; i++) {
    for (let j = 0; j < i; j++) {
      pattern += "* ";
    }
    pattern += "\n"; // New line after each row
  }
  pattern += "</pre>";
  displayOutput("patternOutput", pattern);
});

document.getElementById("clearPatternBtn").addEventListener("click", () => {
  displayOutput("patternOutput", "");
});

// Initial clear on load
document.addEventListener("DOMContentLoaded", () => {
  displayOutput("forLoopOutput", "");
  displayOutput("whileLoopOutput", "");
  displayOutput("patternOutput", "");
});
