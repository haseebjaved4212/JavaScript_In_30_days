# Day 29: Library Management System (OOP in JavaScript)

Welcome to Day 29! You've mastered classes and inheritance, so today we'll tackle Composition.

***What Is Composition?***

Composition is a fundamental principle of OOP where a more complex object is created by combining simpler, existing objects. Instead of a child class extending a parent class, a parent class contains instances of other classes as its properties. This allows you to build complex systems from smaller, manageable parts.

Our project will create a Library class that has a collection of Book objects. The Library will handle all interactions with its book collection, demonstrating how to use different objects together to create a functional system.

***Key Concepts 💡***

**1. Composition**

Composition describes a "has-a" relationship. For example, a Car has a Engine and a Wheel, but a Car is not a type of Engine. Similarly, our Library has a list of Book objects. This approach often leads to more flexible and reusable code than inheritance.

**2. Class Interaction**

In this project, you'll see how methods of one class (Library) can take instances of another class (Book) as arguments or return them. This shows how objects can communicate and work together to perform a task.

**3. Encapsulation**

The Library class encapsulates the logic for managing books. A user of the Library class doesn't need to know how it stores the books (e.g., in an array). They only need to use its public methods like `addBook()`, `borrowBook()`, and `returnBook()`.

## Project: Library Management System


**Project Logic:** 

- Book Class: This will be a simple class with properties for title, author, and a boolean isAvailable flag, which will be set to true by default.

- Library Class: This will be the main class that manages the books.

- A constructor that initializes an empty array, this.books, to hold the Book objects.

- A a`ddBook()` method that takes a Book object and adds it to the this.books array.

- A `borrowBook()` method that takes a book's title as an argument. It will search for the book and, if found and available, set its isAvailable property to false.

- A `returnBook()` method that takes a title and sets the book's isAvailable property back to true.

- A `listAvailableBooks()` method that will display all books that are currently available.

## Key Takeaways: What You've Learned 

- "Has-a" vs. "Is-a": You now understand the difference between composition ("has-a") and inheritance ("is-a") and when to use each.

- Building Systems: You can combine simple, focused classes to create a more powerful and complex system.

- Modular Design: By separating the Book and Library logic, your code becomes more organized and easier to maintain.