# Day 28: Inheritance (OOP in JavaScript)

Welcome to Day 28! Yesterday, you learned to create your own classes. Today, we'll build on that foundation with a powerful concept called Inheritance.

***Inheritance*** 

is a way to create a new class that is a modified version of an existing class. The new class is called a child class (or subclass), and the existing class is the parent class (or superclass). The child class automatically gets all the properties and methods of the parent, and you can then add new, specialized features or override existing ones.

Think of a Vehicle class. A Car is a type of Vehicle. It has all the properties of a vehicle (like speed and color) but might have its own unique properties (like numberOfDoors) and methods (like honk()).

***Key Concepts 💡***

**1. The extends keyword**

The `extends` keyword is used to create a child class. It tells JavaScript that the new class will inherit from a parent class.

```js
class ChildClass extends ParentClass {
  // class body
}
```
**2. The super() keyword**


The `super()` keyword is used inside the child class's constructor. It's a special function call that executes the parent class's constructor. You must call super() before you can use the this keyword in the child class's constructor.

**3. Method Overriding**

A child class can define a method with the same name as a method in its parent class. When you call that method on an instance of the child class, the child's version of the method will be executed instead of the parent's. This is called method overriding.

## Project: Shape Area Calculator 


**Project Logic:**

Our project will demonstrate inheritance by creating a hierarchy of shapes.

**Parent Class Shape:**

- A constructor that takes a color as an argument.

- A method `getColor()` that returns the shape's color.

**Child Class Circle:**

- extends the Shape class.

- A constructor that takes a radius and color. It will call super(color) to initialize the parent's color property.

- A new method calculateArea() that calculates and returns the circle's area <i>(
Pi &middot; cdotr<sup>2</sup> ).</i>

 
**Child Class Rectangle:**

- extends the Shape class.

- A constructor that takes width, height, and color. It will call super(color).

- A new method calculateArea() that calculates and returns the rectangle's area <i> (w
cdoth).</i>

## Key Takeaways: What You've Learned 

- Code Reusability: Inheritance allows you to reuse common properties and methods from a parent class, avoiding redundant code.

- Creating a Hierarchy: It provides a clear, logical structure to your code, representing "is a" relationships (e.g., a Circle is a Shape).

- Specialization: Child classes can specialize their behavior by adding new features or overriding existing methods.