
    // --- DOM Elements ---
    const jokeContainer = document.getElementById('joke-container');
    const jokeText = document.getElementById('joke-text');
    const newJokeBtn = document.getElementById('new-joke-btn');

    // --- API URL ---
    const apiUrl = 'https://official-joke-api.appspot.com/random_joke';

    /**
     * Fetches a random joke from the API and updates the DOM.
     */
    function fetchJoke() {
      // 1. Display a loading message
      jokeText.textContent = 'Loading...';
      newJokeBtn.disabled = true; // Disable button during fetch

      // 2. Use the Fetch API to make a GET request
      fetch(apiUrl)
        // 3. The first .then() handles the Response object
        .then(response => {
          // Check if the response was successful
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          // Parse the JSON data from the response body
          return response.json();
        })
        // 4. The second .then() handles the parsed JSON data
        .then(data => {
          // Check if the data has the expected properties
          if (data.setup && data.punchline) {
            // Create the full joke string using a template literal
            const fullJoke = `${data.setup} ... ${data.punchline}`;
            jokeText.textContent = fullJoke;
          } else {
            jokeText.textContent = 'Oops, something went wrong with the joke data.';
          }
        })
        // 5. The .catch() handles any errors that occur during the fetch
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          jokeText.textContent = `Failed to fetch joke: ${error.message}`;
        })
        // 6. The .finally() block runs after the promise settles (either resolved or rejected)
        .finally(() => {
          newJokeBtn.disabled = false; // Re-enable the button
        });
    }

    // --- Event Listener ---
    newJokeBtn.addEventListener('click', fetchJoke);

    // --- Initial Call ---
    // Fetch a joke when the page first loads
    fetchJoke();
  