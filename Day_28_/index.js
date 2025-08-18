
    // --- Core Concepts: Inheritance in Action ---

    // 1. Parent Class: Shape
    class Shape {
      constructor(color) {
        this.color = color;
      }

      getColor() {
        return `The color of this shape is ${this.color}.`;
      }
    }

    // 2. Child Class: Circle
    //    The 'extends' keyword inherits from the Shape class.
    class Circle extends Shape {
      constructor(radius, color) {
        // The 'super' keyword calls the parent's constructor.
        // It's mandatory to call super() before using 'this'.
        super(color);
        this.radius = radius;
      }

      // A method unique to the Circle class.
      calculateArea() {
        // Math.PI is a built-in constant for pi.
        return Math.PI * this.radius * this.radius;
      }
    }

    // 3. Child Class: Rectangle
    //    It also 'extends' from the Shape class.
    class Rectangle extends Shape {
      constructor(width, height, color) {
        // Call the parent's constructor with the color.
        super(color);
        this.width = width;
        this.height = height;
      }

      // A method unique to the Rectangle class.
      calculateArea() {
        return this.width * this.height;
      }
    }

    // --- Creating and Using Objects ---

    // Create instances of our classes
    const myCircle = new Circle(5, 'blue');
    const myRectangle = new Rectangle(8, 4, 'red');

    // Get the results container
    const resultsContainer = document.getElementById('results');

    // Helper function to create and append HTML elements
    function createResultElement(title, value) {
      const resultElement = document.createElement('div');
      resultElement.className = 'p-6 rounded-lg border border-gray-200';
      resultElement.innerHTML = `
                <h2 class="text-xl font-semibold text-gray-800">${title}</h2>
                <p class="text-gray-600">${value}</p>
            `;
      resultsContainer.appendChild(resultElement);
    }

    // Use the inherited and unique methods
    createResultElement('Circle Information:', `
            The circle's radius is ${myCircle.radius}. <br/>
            Its color is ${myCircle.getColor()}. <br/>
            Its area is ${myCircle.calculateArea().toFixed(2)}.
        `);

    createResultElement('Rectangle Information:', `
            The rectangle's dimensions are ${myRectangle.width}x${myRectangle.height}. <br/>
            Its color is ${myRectangle.getColor()}. <br/>
            Its area is ${myRectangle.calculateArea()}.
        `);

    // Log the objects to the console for inspection
    console.log("Here are the objects we created:");
    console.log("myCircle:", myCircle);
    console.log("myRectangle:", myRectangle);
  