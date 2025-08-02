// Day 12 Project: Book Information Extractor


// --- Sample Data ---
const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel",
  },
  { title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Fiction",
  },
  {
    title: "Moby Dick",
    author: "Herman Melville",
    year: 1851,
    genre: "Adventure",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genre: "Novel",
  },
];

// --- DOM Element References ---
const originalBookListDiv = document.getElementById("originalBookList");
const extractedInfoListDiv = document.getElementById("extractedInfoList");
const extractBtn = document.getElementById("extractBtn");

// --- UI Rendering Functions ---

/**
 * Renders the original, full book data to the 'Original Book Data' panel.
 */
function renderOriginalBooks() {
  originalBookListDiv.innerHTML = ""; // Clear previous content

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    // Use Object.entries() and for...of loop to dynamically build the HTML
    let htmlContent = "";
    for (const [key, value] of Object.entries(book)) {
      htmlContent += `<p><strong>${key}:</strong> ${value}</p>`;
    }
    bookCard.innerHTML = htmlContent;
    originalBookListDiv.appendChild(bookCard);
  });
}

/**
 * Renders the extracted book data (title and author) to the 'Extracted Details' panel.
 * @param {Array} data - An array of objects containing only the title and author.
 */
function renderExtractedInfo(data) {
  extractedInfoListDiv.innerHTML = ""; // Clear previous content

  data.forEach((item) => {
    const itemCard = document.createElement("div");
    itemCard.classList.add("extracted-card");
    itemCard.innerHTML = `
            <p><strong>Title:</strong> ${item.title}</p>
            <p><strong>Author:</strong> ${item.author}</p>
        `;
    extractedInfoListDiv.appendChild(itemCard);
  });
}

// --- Main Logic Function ---

/**
 * Extracts the title and author from each book object in the global 'books' array.
 * This function is triggered by the 'Extract' button.
 */
function extractBookInfo() {
  // We use the .map() array method to create a new array.
  const extractedData = books.map((book) => {
    // Here, we use modern object destructuring to pull out just 'title' and 'author'.
    const { title, author } = book;

    // Return a new object with only these two properties.
    // This is a concise way of writing { title: title, author: author }
    return { title, author };
  });

  // Log the result to the console for inspection
  console.log("Original data:", books);
  console.log("Extracted data:", extractedData);

  // Call the rendering function to update the UI
  renderExtractedInfo(extractedData);
}

// --- Event Listeners ---

// Add a click event listener to the extract button
extractBtn.addEventListener("click", extractBookInfo);

// --- Initial Setup on Page Load ---
// Render the original data when the page first loads
document.addEventListener("DOMContentLoaded", () => {
  renderOriginalBooks();
});
