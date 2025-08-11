// --- DOM Elements ---
const canvas = document.getElementById("drawingCanvas");
const clearBtn = document.getElementById("clearBtn");
const colors = document.querySelectorAll('[id^="color-"]');
const ctx = canvas.getContext("2d");

// --- State Variables ---
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let currentColor = "black";
const initialCanvasWidth = 800;
const initialCanvasHeight = 600;

// --- Canvas Setup ---
// Make the canvas responsive
function resizeCanvas() {
  const containerWidth = canvas.parentElement.offsetWidth;
  const newWidth = Math.min(containerWidth - 32, initialCanvasWidth); // 32px for padding
  const newHeight = newWidth * (initialCanvasHeight / initialCanvasWidth);
  canvas.width = newWidth;
  canvas.height = newHeight;
  // Re-apply styles after resize
  ctx.strokeStyle = currentColor;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 5;
}

window.addEventListener("load", resizeCanvas);
window.addEventListener("resize", resizeCanvas);

// --- Drawing Functions ---
/**
 * Draws a line on the canvas.
 * @param {Event} e The event object (mouse or touch).
 */
function draw(e) {
  if (!isDrawing) return;

  // Get coordinates, accounting for touch vs mouse
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;

  // Get canvas position relative to the viewport
  const rect = canvas.getBoundingClientRect();
  const x = ((clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
  const y = ((clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(x, y);
  ctx.stroke();

  [lastX, lastY] = [x, y];
}

/**
 * Event handler for mouse/touch down.
 * @param {Event} e The event object.
 */
function startDrawing(e) {
  isDrawing = true;
  // Get initial coordinates
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const rect = canvas.getBoundingClientRect();
  lastX = ((clientX - rect.left) / (rect.right - rect.left)) * canvas.width;
  lastY = ((clientY - rect.top) / (rect.bottom - rect.top)) * canvas.height;
}

/**
 * Event handler for mouse/touch up.
 */
function stopDrawing() {
  isDrawing = false;
}

/**
 * Clears the entire canvas.
 */
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/**
 * Changes the drawing color.
 * @param {string} color The new color to set.
 */
function changeColor(color) {
  currentColor = color;
  ctx.strokeStyle = currentColor;
}

// --- Event Listeners ---

// Mouse Events
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);

// Touch Events for mobile devices
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchmove", draw);
canvas.addEventListener("touchend", stopDrawing);

// Clear button listener
clearBtn.addEventListener("click", clearCanvas);

// Color button listeners
colors.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.style.backgroundColor;
    changeColor(color);
  });
});

// Initial setup for the context
ctx.strokeStyle = currentColor;
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;
