// Day 11 Project: Simple Note-Taking App with Local Storage

// --- Global State ---
// Array to hold all note objects. Each note: { id: 'uniqueId', title: 'Note Title', content: 'Note content' }
let notes = [];

// --- DOM Element References ---
const noteTitleInput = document.getElementById("noteTitle");
const noteContentInput = document.getElementById("noteContent");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesListDiv = document.getElementById("notesList");
const clearAllNotesBtn = document.getElementById("clearAllNotesBtn");

// --- Local Storage Functions ---

/**
 * Saves the current 'notes' array to Local Storage.
 * The array is converted to a JSON string before saving.
 */
function saveNotes() {
  try {
    // JSON.stringify() converts a JavaScript value to a JSON string
    localStorage.setItem("myNotes", JSON.stringify(notes));
    console.log("Notes saved to Local Storage.");
  } catch (e) {
    // Catch potential errors like QuotaExceededError (storage full)
    console.error("Error saving notes to Local Storage:", e);
    // You might want to display a user-friendly message here
    alert("Could not save notes. Local storage might be full or blocked.");
  }
}

/**
 * Loads notes from Local Storage into the 'notes' array.
 * The JSON string is parsed back into a JavaScript array.
 */
function loadNotes() {
  try {
    // localStorage.getItem() retrieves the value as a string
    const storedNotes = localStorage.getItem("myNotes");
    if (storedNotes) {
      // JSON.parse() converts a JSON string back into a JavaScript object/array
      notes = JSON.parse(storedNotes);
      console.log("Notes loaded from Local Storage.");
    } else {
      notes = []; // Initialize as empty array if no notes are found
      console.log(
        "No notes found in Local Storage. Initializing empty notes array."
      );
    }
  } catch (e) {
    console.error("Error loading notes from Local Storage:", e);
    notes = []; // Fallback to an empty array if parsing or loading fails
    alert("Could not load notes. Data might be corrupted or storage blocked.");
  }
}

// --- UI Rendering Function ---

/**
 * Renders the 'notes' array to the DOM, displaying each note as a card.
 */
function renderNotes() {
  notesListDiv.innerHTML = ""; // Clear existing notes from the display

  if (notes.length === 0) {
    notesListDiv.innerHTML =
      '<p class="empty-list-message">No notes yet! Add one above.</p>';
    return;
  }

  // Iterate over the notes array to create and append note cards
  notes.forEach((note) => {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.dataset.id = note.id; // Store the note's ID on the element for easy access

    // Populate the note card with title, content, and a delete button
    noteCard.innerHTML = `
            <h3 class="note-title">${note.title}</h3>
            <p class="note-content">${note.content}</p>
            <button class="delete-note-btn" data-id="${note.id}">Delete</button>
        `;

    // Attach event listener to the dynamically created delete button
    const deleteBtn = noteCard.querySelector(".delete-note-btn");
    deleteBtn.addEventListener("click", () => deleteNote(note.id));

    notesListDiv.appendChild(noteCard);
  });
}

// --- Note Management Functions ---

/**
 * Adds a new note to the 'notes' array, saves it, and updates the UI.
 */
function addNote() {
  const title = noteTitleInput.value.trim();
  const content = noteContentInput.value.trim();

  if (title === "" || content === "") {
    alert("Please enter both title and content for the note.");
    return;
  }

  // Create a unique ID for the new note (timestamp is a simple way)
  const newNote = {
    id: Date.now().toString(), // Using current timestamp as a unique ID
    title: title,
    content: content,
  };

  notes.push(newNote); // Add the new note object to the global array
  saveNotes(); // Persist the updated notes array to Local Storage
  renderNotes(); // Re-render the UI to display the new note
  noteTitleInput.value = ""; // Clear input fields after adding
  noteContentInput.value = "";
}

/**
 * Deletes a note from the 'notes' array based on its ID, saves changes, and updates the UI.
 * @param {string} id - The unique ID of the note to delete.
 */
function deleteNote(id) {
  // Filter out the note with the matching ID. This creates a NEW array.
  notes = notes.filter((note) => note.id !== id);
  saveNotes(); // Save the updated (filtered) array to Local Storage
  renderNotes(); // Re-render the UI to reflect the deletion
}

/**
 * Clears all notes from Local Storage and the 'notes' array, then updates the UI.
 */
function clearAllNotes() {
  // Confirm with the user before deleting all notes
  if (
    confirm(
      "Are you sure you want to delete ALL notes? This action cannot be undone."
    )
  ) {
    localStorage.clear(); // Removes ALL key-value pairs for this domain from Local Storage
    notes = []; // Reset the in-memory notes array to empty
    renderNotes(); // Update the UI to show an empty list
    console.log("All notes cleared from Local Storage.");
  }
}

// --- Event Listeners ---

// Add a new note when the "Add Note" button is clicked
addNoteBtn.addEventListener("click", addNote);

// Clear all notes when the "Clear All Notes" button is clicked
clearAllNotesBtn.addEventListener("click", clearAllNotes);

// --- Initial Setup on Page Load ---
// Load notes from local storage and render them when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  loadNotes(); // First, load any existing notes
  renderNotes(); // Then, display them in the UI
});
