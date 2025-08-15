document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const message = document.getElementById("message").value;

    const feedbackList = document.getElementById("feedbackList");

    // Create feedback card
    const card = document.createElement("div");
    card.classList.add("feedback-card");
    card.innerHTML = `
        <h3>${name} (${email})</h3>
        <p>Rating: ${rating}</p>
        <p>${message}</p>
    `;

    // Append to list
    feedbackList.prepend(card);

    // Clear form
    this.reset();
  });
