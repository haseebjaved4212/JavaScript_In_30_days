// Day 07 Project: Simple Image Carousel/Slider
// This file contains the interactive project logic.
// All detailed explanations and practice set solutions are in README.md.

// --- Image Data (Array of Objects) ---
const images = [
  {
    src: "https://i.pinimg.com/736x/bb/5d/ee/bb5dee5ef1d1794cbb295081cecdff25.jpg",
    alt: "can't load Image",
  },
  {
    src: "https://i.pinimg.com/1200x/a3/67/6b/a3676b693a77904b29ee12a57da2bffc.jpg",
    alt: "can't load Image",
  },
  {
    src: "https://i.pinimg.com/1200x/52/0e/bd/520ebd71199b8324bef9d07b56810f4a.jpg",
    alt: "can't load Image",
  },
  {
    src: "https://i.pinimg.com/736x/b4/87/25/b487250656bbbaabc883fbb57244ca7d.jpg",
    alt: "can't load Image",
  },
  {
    src: "https://i.pinimg.com/736x/f2/df/c7/f2dfc73493b1e9a8c3c8c71bc0336b77.jpg",
    alt: "can't load  Image",
  },
];

// --- Global State ---
let currentImageIndex = 0; // Tracks the currently displayed image index
let autoPlayInterval; // Variable to hold the interval ID for auto-play

// --- DOM Element References ---
const carouselImage = document.getElementById("carouselImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dotsContainer = document.getElementById("dotsContainer");

// Optional: Auto-play buttons
// const playBtn = document.getElementById('playBtn');
// const pauseBtn = document.getElementById('pauseBtn');

// --- Functions ---

/**
 * Updates the main image displayed in the carousel and highlights the corresponding dot.
 */
function updateCarousel() {
  // Set the src and alt attributes of the main image element
  carouselImage.src = images[currentImageIndex].src;
  carouselImage.alt = images[currentImageIndex].alt;

  // Update dot indicators
  // First, remove 'active' class from all dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active");
    // Add click listener to each dot to jump to that image
    dot.addEventListener("click", () => {
      currentImageIndex = index;
      updateCarousel();
    });
  });
  // Then, add 'active' class to the current dot
  if (dots[currentImageIndex]) {
    dots[currentImageIndex].classList.add("active");
  }
}

/**
 * Moves the carousel to the next image.
 */
function showNextImage() {
  currentImageIndex++; // Increment index
  // If we go past the last image, loop back to the first image
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  updateCarousel(); // Update the display
}

/**
 * Moves the carousel to the previous image.
 */
function showPrevImage() {
  currentImageIndex--; // Decrement index
  // If we go before the first image, loop to the last image
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  updateCarousel(); // Update the display
}

/**
 * Dynamically creates dot indicators for each image in the carousel.
 * Each dot is clickable to jump to a specific image.
 */
function createDots() {
  dotsContainer.innerHTML = ""; // Clear any existing dots

  // Use forEach to create a dot for each image
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = index; // Store the index on the dot element

    // Add click listener to each dot
    dot.addEventListener("click", () => {
      currentImageIndex = index; // Set current index to the clicked dot's index
      updateCarousel(); // Update the carousel display
    });
    dotsContainer.appendChild(dot);
  });
}

// --- Optional Auto-play Functions ---
/**
 * Starts the automatic image cycling.
 */
// function startAutoPlay() {
//     // Clear any existing interval to prevent multiple auto-plays
//     clearInterval(autoPlayInterval);
//     // Set a new interval to call showNextImage every 3000ms (3 seconds)
//     autoPlayInterval = setInterval(showNextImage, 3000);
// }

/**
 * Stops the automatic image cycling.
 */
// function pauseAutoPlay() {
//     clearInterval(autoPlayInterval);
// }

// --- Event Listeners ---

// Add click listeners to the navigation buttons
prevBtn.addEventListener("click", showPrevImage);
nextBtn.addEventListener("click", showNextImage);

// Optional: Auto-play button listeners
// playBtn.addEventListener('click', startAutoPlay);
// pauseBtn.addEventListener('click', pauseAutoPlay);

// --- Initial Setup on Page Load ---
document.addEventListener("DOMContentLoaded", () => {
  createDots(); // Create the dot indicators
  updateCarousel(); // Display the first image and highlight its dot
  // startAutoPlay();  // Uncomment this line to start auto-play automatically on load
});
