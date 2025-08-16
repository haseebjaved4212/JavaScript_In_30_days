# Day 26: Introduction to Classes (OOP in JavaScript)
Welcome to Day 26! Today, we're taking a significant step into a fundamental programming paradigm: Object-Oriented Programming (OOP). While you've been working with objects, today we'll learn the official way to create blueprints for them using Classes.

- A class is a blueprint or a template for creating objects. Think of a class like a cookie cutter and the objects you create from it as the individual cookies. They all share the same shape (properties and methods) but can have unique details (the data they hold).

***Key Concepts 💡***

**1. The class keyword**

The class keyword is used to declare a new class. It's a syntactic sugar over JavaScript's prototype-based inheritance, making it much easier to read and work with.

```js
class ClassName {
  // class body
}
```
**2. The constructor method**

The constructor is a special method that is automatically called when a new object is created from the class. Its purpose is to initialize the object's properties. It's where you'll typically set the initial values for your object's data.

**3. Properties**

Properties are the data or attributes associated with a class. They are defined inside the constructor and are set using the this keyword. For our User class, properties will include name, email, and isLoggedIn.

**4. Methods**

Methods are the functions or behaviors that an object can perform. They are defined inside the class body, outside of the constructor. For our User class, methods will include login() and `logout()`.

**5. The this keyword**

The this keyword is a crucial concept in classes. Inside a method, this refers to the specific instance of the object on which the method was called. It allows you to access and modify the properties of that particular object.

## Project: User Class Creator

**Project Logic: "User Class Creator"**

- Our project will create a simple User class that represents a user of a website.

- Define the User Class: We will define a class with a constructor that accepts a name and email as arguments. It will also initialize a property called isLoggedIn to false.

- Add Methods: We will add two methods to the class:

- `login()`: This method will set the isLoggedIn property to true and log a message to the console.

- `logout()`: This method will set the isLoggedIn property to false and log a message.

- Create Objects (Instances): We will create two new objects, or "instances," of our User class using the new keyword. Each object will be an independent copy with its own properties.

- Interact with Objects: We will call the methods on our new user objects and display the results in a simple HTML interface to demonstrate how the state (isLoggedIn) changes for each object independently.

## Key Takeaways: What You've Learned ✨

- Classes as Blueprints: You now understand that a class is a blueprint for creating objects.

- Encapsulation: Classes allow you to group related data (properties) and behavior (methods) into a single, logical unit.

- Object Instantiation: The new keyword is used to create a new, distinct object from a class.

- this and Scope: You've seen how this is used to refer to the specific object instance within a class.