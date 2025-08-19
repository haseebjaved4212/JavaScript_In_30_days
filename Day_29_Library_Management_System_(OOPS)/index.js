
    // --- Core Concepts: The Book Class ---
    // Represents a single book. Simple and focused.
    class Book {
      constructor(title, author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true; // Default state
      }
    }

    // --- Core Concepts: The Library Class (Composition) ---
    // Represents a collection of books and manages all interactions.
    class Library {
      constructor() {
        // The Library object 'has a' collection of Book objects.
        this.books = [];
      }

      /**
       * Adds a new Book instance to the library's collection.
       * @param {Book} book - The book object to add.
       */
      addBook(book) {
        this.books.push(book);
        console.log(`Added "${book.title}" to the library.`);
      }

      /**
       * Attempts to borrow a book by its title.
       * @param {string} title - The title of the book to borrow.
       */
      borrowBook(title) {
        // Find the book in the collection.
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());

        if (book && book.isAvailable) {
          book.isAvailable = false;
          console.log(`Successfully borrowed "${book.title}".`);
          return true;
        } else if (book && !book.isAvailable) {
          console.log(`Sorry, "${book.title}" is currently unavailable.`);
        } else {
          console.log(`Book with title "${title}" not found.`);
        }
        return false;
      }

      /**
       * Attempts to return a book by its title.
       * @param {string} title - The title of the book to return.
       */
      returnBook(title) {
        // Find the book in the collection.
        const book = this.books.find(b => b.title.toLowerCase() === title.toLowerCase());

        if (book && !book.isAvailable) {
          book.isAvailable = true;
          console.log(`Successfully returned "${book.title}".`);
          return true;
        } else if (book && book.isAvailable) {
          console.log(`"${book.title}" is already in the library.`);
        } else {
          console.log(`Book with title "${title}" not found.`);
        }
        return false;
      }

      /**
       * Returns an array of all available books.
       * @returns {Array<Book>}
       */
      getAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
      }
    }

    // --- Main Application Logic ---

    // Get DOM elements
    const booksListElement = document.getElementById('books-list');
    const totalBooksCountElement = document.getElementById('total-books-count');
    const availableBooksCountElement = document.getElementById('available-books-count');
    const listButton = document.getElementById('list-button');
    const borrowButton = document.getElementById('borrow-button');
    const returnButton = document.getElementById('return-button');

    // Create a new instance of the Library class
    const myLibrary = new Library();

    // Create some instances of the Book class
    const book1 = new Book("The Hitchhiker's Guide to the Galaxy", "Douglas Adams");
    const book2 = new Book("Dune", "Frank Herbert");
    const book3 = new Book("The Lord of the Rings", "J.R.R. Tolkien");

    // Add the books to the library
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    myLibrary.addBook(book3);

    // Function to render the list of books to the UI
    function renderBooks(booksToRender) {
      booksListElement.innerHTML = ''; // Clear previous list
      if (booksToRender.length === 0) {
        booksListElement.innerHTML = `<p class="text-gray-500 text-center">No books to display.</p>`;
        return;
      }

      booksToRender.forEach(book => {
        const statusColor = book.isAvailable ? 'text-green-600' : 'text-red-600';
        const statusText = book.isAvailable ? 'Available' : 'Borrowed';
        const bookElement = document.createElement('div');
        bookElement.className = 'p-4 border border-gray-200 rounded-lg';
        bookElement.innerHTML = `
                    <h3 class="font-semibold text-lg text-gray-800">${book.title}</h3>
                    <p class="text-gray-500 text-sm">by ${book.author}</p>
                    <p class="mt-2 text-sm font-medium ${statusColor}">Status: ${statusText}</p>
                `;
        booksListElement.appendChild(bookElement);
      });
    }

    // Function to update the counts in the UI
    function updateCounts() {
      totalBooksCountElement.textContent = myLibrary.books.length;
      availableBooksCountElement.textContent = myLibrary.getAvailableBooks().length;
    }

    // Event listeners for buttons
    listButton.addEventListener('click', () => {
      console.log('Listing all available books...');
      renderBooks(myLibrary.getAvailableBooks());
    });

    borrowButton.addEventListener('click', () => {
      const titleToBorrow = prompt('Enter the title of the book to borrow:');
      if (titleToBorrow) {
        myLibrary.borrowBook(titleToBorrow);
        renderBooks(myLibrary.books);
        updateCounts();
      }
    });

    returnButton.addEventListener('click', () => {
      const titleToReturn = prompt('Enter the title of the book to return:');
      if (titleToReturn) {
        myLibrary.returnBook(titleToReturn);
        renderBooks(myLibrary.books);
        updateCounts();
      }
    });

    // Initial setup
    updateCounts();
    renderBooks(myLibrary.books);
  