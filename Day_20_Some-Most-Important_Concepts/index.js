// --- DOM Elements (TDZ in Action) ---
// These const variables are in the Temporal Dead Zone (TDZ) until they are initialized here.
// Attempting to use them before this line would result in a ReferenceError.
const stopwatchDisplay = document.getElementById("stopwatchDisplay");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const lapBtn = document.getElementById("lapBtn");
const resetBtn = document.getElementById("resetBtn");
const lapsList = document.getElementById("lapsList");

// --- Stopwatch State (will be managed by closures) ---
let timer = null; // A simple `let` variable, initialized as null
let totalTime = 0;
let lapCounter = 0;

/**
 * Formats a given number of milliseconds into a HH:MM:SS string.
 * @param {number} milliseconds The time in milliseconds.
 * @returns {string} The formatted time string.
 */
function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

/**
 * This function is the core of our stopwatch. It uses a closure to
 * remember the `totalTime` and `lapCounter` state, even after the
 * event listeners are set up.
 */
function startStopwatch() {
  // --- Closure in Action ---
  // The inner functions (like the one passed to setInterval)
  // will close over the `totalTime` and `lapCounter` variables,
  // retaining access to their values.
  const startTime = Date.now() - totalTime;

  // --- The Event Loop in Action ---
  // The setInterval function is a Web API. It places a callback
  // function in the Callback Queue every 1000ms. The Event Loop
  // will pick it up and put it on the Call Stack when the stack is empty,
  // ensuring the UI doesn't freeze.
  timer = setInterval(() => {
    totalTime = Date.now() - startTime;
    stopwatchDisplay.textContent = formatTime(totalTime);
  }, 1000); // Ticks every second
}

/**
 * Event listener for the Start button.
 */
startBtn.addEventListener("click", () => {
  // We check if a timer is already running to prevent multiple timers.
  if (!timer) {
    startStopwatch();
    startBtn.disabled = true;
  }
});

/**
 * Event listener for the Pause button.
 */
pauseBtn.addEventListener("click", () => {
  // Clears the timer, effectively pausing the stopwatch.
  clearInterval(timer);
  timer = null;
  startBtn.disabled = false;
});

/**
 * Event listener for the Lap button.
 */
lapBtn.addEventListener("click", () => {
  // Only record a lap if the timer is currently running.
  if (timer) {
    lapCounter++; // This is part of the closure
    const lapTime = formatTime(totalTime);
    const li = document.createElement("li");
    li.className =
      "bg-gray-800 p-3 rounded-lg flex justify-between items-center";
    li.textContent = `Lap ${lapCounter}: ${lapTime}`;
    lapsList.prepend(li); // Add the new lap to the top of the list.
  }
});

/**
 * Event listener for the Reset button.
 */
resetBtn.addEventListener("click", () => {
  // Stops the timer and resets all state variables.
  clearInterval(timer);
  timer = null;
  totalTime = 0;
  lapCounter = 0;
  stopwatchDisplay.textContent = formatTime(totalTime);
  lapsList.innerHTML = "";
  startBtn.disabled = false;
});
