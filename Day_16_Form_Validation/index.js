// Day 16 Project: Simple Registration Form with Validation

// --- DOM Element References ---
const registrationForm = document.getElementById("registrationForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const successMessage = document.getElementById("successMessage");

// --- Helper Functions for UI Feedback ---

/**
 * Displays an error message for a given input field.
 * Adds 'error' class for styling and updates the small tag's text.
 * @param {HTMLElement} input - The input element that has an error.
 * @param {string} message - The error message to display.
 */
function showError(input, message) {
  const formControl = input.parentElement; // Get the parent div (.form-control)
  formControl.classList.remove("success"); // Remove success class if present
  formControl.classList.add("error"); // Add error class for red border/styling
  const small = formControl.querySelector("small"); // Get the small tag within this form-control
  small.textContent = message; // Set the error message text
}

/**
 * Shows success styling for a given input field.
 * Removes 'error' class and adds 'success' class. Clears the small tag's text.
 * @param {HTMLElement} input - The input element that is valid.
 */
function showSuccess(input) {
  const formControl = input.parentElement; // Get the parent div (.form-control)
  formControl.classList.remove("error"); // Remove error class if present
  formControl.classList.add("success"); // Add success class for green border/styling
  const small = formControl.querySelector("small"); // Get the small tag
  small.textContent = ""; // Clear any previous error message
}

// --- Validation Functions ---

/**
 * Checks if required input fields are empty.
 * @param {Array<HTMLElement>} inputArray - An array of input elements to check.
 * @returns {boolean} True if all required fields are filled, false otherwise.
 */
function checkRequired(inputArray) {
  let isFormValid = true;
  inputArray.forEach((input) => {
    if (input.value.trim() === "") {
      // .trim() removes whitespace from both ends
      showError(input, `${getFieldName(input)} is required`);
      isFormValid = false; // Set flag to false if any required field is empty
    } else {
      showSuccess(input);
    }
  });
  return isFormValid;
}

/**
 * Checks input length against min and max values.
 * @param {HTMLElement} input - The input element to check.
 * @param {number} min - Minimum allowed length.
 * @param {number} max - Maximum allowed length.
 * @returns {boolean} True if length is valid, false otherwise.
 */
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
    return false;
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
    return false;
  } else {
    showSuccess(input);
    return true;
  }
}

/**
 * Checks if email is valid using a regular expression.
 * @param {HTMLElement} input - The email input element.
 * @returns {boolean} True if email is valid, false otherwise.
 */
function checkEmail(input) {
  // Basic email regex pattern
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Email is not valid");
    return false;
  }
}

/**
 * Checks password strength using a regular expression.
 * Requires: min 6 chars, at least one uppercase, one lowercase, one number, one special character.
 * @param {HTMLElement} input - The password input element.
 * @returns {boolean} True if password meets criteria, false otherwise.
 */
function checkPassword(input) {
  // Regex for: at least 6 characters, one uppercase, one lowercase, one number, one special character
  const re =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
  if (re.test(input.value)) {
    showSuccess(input);
    return true;
  } else {
    showError(
      input,
      "Password must be at least 6 chars, with upper, lower, number & special char"
    );
    return false;
  }
}

/**
 * Checks if password and confirm password fields match.
 * @param {HTMLElement} passwordInput - The password input element.
 * @param {HTMLElement} confirmPasswordInput - The confirm password input element.
 * @returns {boolean} True if passwords match, false otherwise.
 */
function checkPasswordsMatch(passwordInput, confirmPasswordInput) {
  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, "Passwords do not match");
    return false;
  } else {
    showSuccess(confirmPasswordInput);
    return true;
  }
}

/**
 * Helper function to get the field name for error messages (e.g., "Username" from "usernameInput").
 * Converts 'username' to 'Username'.
 * @param {HTMLElement} input - The input element.
 * @returns {string} The formatted field name.
 */
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// --- Main Form Validation Logic ---

/**
 * Orchestrates all validation checks for the form.
 * @returns {boolean} True if the entire form is valid, false otherwise.
 */
function validateForm() {
  // Initialize isValid to true. Each check will be ANDed with this.
  // If any check fails, isValid will become false and remain false.
  let isValid = true;

  // Perform all required field checks first
  isValid =
    checkRequired([
      usernameInput,
      emailInput,
      passwordInput,
      confirmPasswordInput,
    ]) && isValid;

  // Perform other specific validations only if the required fields are filled
  // This prevents multiple error messages for the same field if it's just empty
  if (isValid) {
    // Only proceed with length/format checks if required fields are good
    isValid = checkLength(usernameInput, 3, 15) && isValid;
    isValid = checkEmail(emailInput) && isValid;
    isValid = checkPassword(passwordInput) && isValid;
    isValid =
      checkPasswordsMatch(passwordInput, confirmPasswordInput) && isValid;
  }

  return isValid;
}

// --- Event Listener for Form Submission ---

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission (page reload)

  // Call the main validation function
  if (validateForm()) {
    // If validateForm returns true, all validations passed
    successMessage.classList.remove("hidden"); // Show the success message
    registrationForm.reset(); // Clear all form fields after successful submission

    // Optional: Hide success message and reset input styles after a few seconds
    setTimeout(() => {
      successMessage.classList.add("hidden");
      // Reset all form control styles (remove success/error classes)
      document.querySelectorAll(".form-control").forEach((control) => {
        control.classList.remove("success", "error");
        control.querySelector("small").textContent = ""; // Clear error text
      });
    }, 5000); // Hide after 5 seconds

    console.log("Form submitted successfully!");
  } else {
    // If validateForm returns false, validation failed
    successMessage.classList.add("hidden"); // Ensure success message is hidden
    console.log("Form validation failed. Please check errors.");
  }
});

// --- Initial Setup (Optional: Real-time validation on input/blur) ---
// You can add event listeners to individual inputs for real-time validation feedback
// For example:
// usernameInput.addEventListener('blur', () => checkLength(usernameInput, 3, 15));
// emailInput.addEventListener('input', () => checkEmail(emailInput));
// passwordInput.addEventListener('input', () => checkPassword(passwordInput));
// confirmPasswordInput.addEventListener('input', () => checkPasswordsMatch(passwordInput, confirmPasswordInput));
