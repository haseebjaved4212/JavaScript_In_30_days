// Day 19 Project: Weather App with async/await
// This file demonstrates how to use async/await for cleaner asynchronous code.

// --- DOM Element References ---
const weatherForm = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const weatherDisplay = document.getElementById("weatherDisplay");
const weatherBackground = document.getElementById("weather-background");

// --- Helper Functions for UI State ---

/**
 * Removes all dynamic background classes from the background element.
 */
function clearBackground() {
  weatherBackground.classList.remove("sunny", "cloudy", "hot");
}

/**
 * Sets the background image based on the weather condition.
 * @param {string} condition - The weather condition (e.g., 'Sunny', 'Cloudy').
 */
function setBackground(condition) {
  clearBackground();
  switch (condition.toLowerCase()) {
    case "sunny":
      weatherBackground.classList.add("sunny");
      break;
    case "cloudy":
      weatherBackground.classList.add("cloudy");
      break;
    case "hot":
      weatherBackground.classList.add("hot");
      break;
    default:
      weatherBackground.classList.add("default");
      break;
  }
}

/**
 * Shows a loading spinner and message in the UI.
 */
function showLoading() {
  weatherDisplay.innerHTML = `
        <div class="loading-spinner"></div>
        <p>Fetching weather data...</p>
    `;
  // Set a default background while loading
  clearBackground();
  weatherBackground.classList.add("default");
}

/**
 * Updates the UI with a success message and weather data.
 * @param {object} weatherData - The weather data to display.
 */
function updateWeatherUI(weatherData) {
  weatherDisplay.innerHTML = `
        <h2>${weatherData.city}</h2>
        <p class="text-3xl">${weatherData.temperature}°C</p>
        <p class="text-xl">${weatherData.condition}</p>
        <p class="text-gray-400">${weatherData.description}</p>
    `;
  // Update the background based on the weather condition
  setBackground(weatherData.condition);
}

/**
 * Updates the UI with an error message.
 * @param {string} message - The error message to display.
 */
function displayError(message) {
  weatherDisplay.innerHTML = `
        <p class="error-message">${message}</p>
        <p class="text-gray-400 mt-2">Please try another city.</p>
    `;
  // Clear the background on error
  clearBackground();
  weatherBackground.classList.add("default");
}

// --- Core `async/await` Logic ---

/**
 * Simulates a fetch call to a fake weather API.
 * This function returns a Promise that resolves or rejects after a delay.
 * @param {string} city - The city name to fetch data for.
 * @returns {Promise<object>} - A promise that resolves with weather data or rejects with an error.
 */
function fakeApiCall(city) {
  return new Promise((resolve, reject) => {
    // Simulate a 2-second network delay
    setTimeout(() => {
      const formattedCity = city.toLowerCase();
      const weatherData = {
        london: {
          temperature: 15,
          condition: "Cloudy",
          description: "Light showers expected.",
        },
        "new york": {
          temperature: 22,
          condition: "Sunny",
          description: "Clear skies with a gentle breeze.",
        },
        tokyo: {
          temperature: 25,
          condition: "Hot",
          description: "High humidity, bring water!",
        },
      };

      // Check if the city exists in our fake data
      if (weatherData[formattedCity]) {
        resolve({ city: city, ...weatherData[formattedCity] });
      } else {
        reject(new Error(`Weather data not found for "${city}".`));
      }
    }, 2000);
  });
}

/**
 * This is our main asynchronous function.
 * It uses `await` to wait for the fakeApiCall promise to resolve.
 * The `try...catch` block handles both success and failure states.
 * @param {string} city - The city name from the input.
 */
async function handleWeatherFetch(city) {
  showLoading(); // Show loading state before the async operation starts

  try {
    // `await` pauses the function here until fakeApiCall() resolves.
    const weatherData = await fakeApiCall(city);

    // If the promise resolves, this code runs.
    updateWeatherUI(weatherData);
  } catch (error) {
    // If the promise rejects, this catch block runs.
    displayError(error.message);
  }
}

// --- Event Listeners and Initial Setup ---

weatherForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission (page reload)
  const city = cityInput.value.trim();
  if (city) {
    handleWeatherFetch(city);
  }
});

// Log a message to the console when the page is ready
document.addEventListener("DOMContentLoaded", () => {
  console.log(
    "Day 19 Weather App is ready. Enter a city and click 'Get Weather'."
  );
});
