
// --- Global Scope ---
// This variable is declared outside of any function or block, making it
// accessible from anywhere in the script.
const globalVar = "I am a GLOBAL variable, accessible everywhere.";

// --- DOM Element References ---
const outputDiv = document.getElementById("output");
const globalScopeBtn = document.getElementById("globalScopeBtn");
const functionScopeBtn = document.getElementById("functionScopeBtn");
const blockScopeBtn = document.getElementById("blockScopeBtn");

// --- Helper Functions ---

/**
 * Clears the output panel and logs a title.
 * @param {string} title The title for the current demonstration.
 */
function displayOutput(title) {
  outputDiv.textContent = `--- ${title} ---\n\n`;
  console.clear(); // Clear the console for a clean view
  console.log(`--- ${title} ---`);
}

/**
 * Appends a message to the output panel and logs it to the console.
 * @param {string} message The message to display.
 */
function appendMessage(message) {
  outputDiv.textContent += message + "\n";
  console.log(message);
}

// --- Scope Demonstration Functions ---

/**
 * Demonstrates how a variable in the global scope can be accessed
 * from both the global level and inside a function.
 */
function demonstrateGlobalScope() {
  displayOutput("Global Scope Demonstration");

  appendMessage(globalVar);

  // Inner function also has access to the global variable
  function accessGlobalFromInner() {
    appendMessage(`(Inside a function): ${globalVar}`);
  }

  accessGlobalFromInner();
  appendMessage(`(From the global level): ${globalVar}`);
}

/**
 * Demonstrates function scope, where a variable is only accessible
 * inside the function it was declared in.
 */
function demonstrateFunctionScope() {
  displayOutput("Function Scope Demonstration");

  const functionVar = "I am a FUNCTION-scoped variable, only in here.";
  appendMessage(`(Inside the function): ${functionVar}`);

  // This is a common mistake. The following line will cause an error
  // because functionVar is not accessible outside this function.
  try {
    // This line is commented out to prevent a hard error, but
    // it would fail if uncommented.
    // console.log(functionVar);
    // We simulate the error for demonstration purposes.
    throw new ReferenceError("functionVar is not defined");
  } catch (error) {
    appendMessage(`(Outside the function): ERROR!`);
    appendMessage(`Message: ${error.message}`);
  }
}

/**
 * Demonstrates block scope using `let` and `const`.
 * A variable declared inside a block (`if` statement, `for` loop, etc.)
 * is only accessible within that block.
 */
function demonstrateBlockScope() {
  displayOutput("Block Scope Demonstration");

  const x = 5;
  if (x > 3) {
    // This variable is block-scoped because it's declared with 'let'
    let blockVar = "I am a BLOCK-scoped variable.";
    appendMessage(`(Inside the block): ${blockVar}`);
  }

  // This will cause a ReferenceError because blockVar is outside its scope
  try {
    // console.log(blockVar); // This would fail if uncommented
    throw new ReferenceError("blockVar is not defined");
  } catch (error) {
    appendMessage(`(Outside the block): ERROR!`);
    appendMessage(`Message: ${error.message}`);
  }
}

// --- Event Listeners and Initial Setup ---

// Attach event listeners to the buttons to trigger the respective functions
globalScopeBtn.addEventListener("click", demonstrateGlobalScope);
functionScopeBtn.addEventListener("click", demonstrateFunctionScope);
blockScopeBtn.addEventListener("click", demonstrateBlockScope);

// Initial message when the page loads
document.addEventListener("DOMContentLoaded", () => {
  outputDiv.textContent = "Click a button to explore different scopes!";
});
