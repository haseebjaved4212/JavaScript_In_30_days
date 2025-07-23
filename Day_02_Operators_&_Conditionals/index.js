
    // Get references to the HTML elements
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultDisplay = document.getElementById('result');

    const addBtn = document.getElementById('addBtn');
    const subtractBtn = document.getElementById('subtractBtn');
    const multiplyBtn = document.getElementById('multiplyBtn');
    const divideBtn = document.getElementById('divideBtn');

    /**
     * Performs the calculation based on the operator and displays the result.
     * @param {string} operator - The mathematical operator (+, -, *, /).
     */
    function calculate(operator) {
      // Get values from input fields and convert them to numbers
      // Using parseFloat to handle decimal numbers
      const num1 = parseFloat(num1Input.value);
      const num2 = parseFloat(num2Input.value);

      // Check if inputs are valid numbers
      if (isNaN(num1) || isNaN(num2)) {
        resultDisplay.textContent = "Please enter valid numbers.";
        resultDisplay.classList.remove('text-blue-700');
        resultDisplay.classList.add('text-red-500'); // Indicate error
        return; // Stop function execution
      }

      let result;
      // Perform the operation based on the operator
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          // Handle division by zero
          if (num2 === 0) {
            resultDisplay.textContent = "Cannot divide by zero!";
            resultDisplay.classList.remove('text-blue-700');
            resultDisplay.classList.add('text-red-500');
            return;
          }
          result = num1 / num2;
          break;
        default:
          resultDisplay.textContent = "Invalid operator.";
          resultDisplay.classList.remove('text-blue-700');
          resultDisplay.classList.add('text-red-500');
          return;
      }

      // Display the result
      resultDisplay.textContent = result;
      resultDisplay.classList.remove('text-red-500'); // Remove error styling if successful
      resultDisplay.classList.add('text-blue-700'); // Apply success styling
    }

    // Add event listeners to each button
    addBtn.addEventListener('click', () => calculate('+'));
    subtractBtn.addEventListener('click', () => calculate('-'));
    multiplyBtn.addEventListener('click', () => calculate('*'));
    divideBtn.addEventListener('click', () => calculate('/'));

    // Optional: Clear result display when inputs are changed
    num1Input.addEventListener('input', () => {
      resultDisplay.textContent = "0";
      resultDisplay.classList.remove('text-red-500');
      resultDisplay.classList.add('text-blue-700');
    });
    num2Input.addEventListener('input', () => {
      resultDisplay.textContent = "0";
      resultDisplay.classList.remove('text-red-500');
      resultDisplay.classList.add('text-blue-700');
    });
  