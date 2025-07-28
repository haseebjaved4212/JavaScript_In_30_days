# Day 07: JavaScript DOM Manipulation & Event Handling (Project: Image Carousel)

Welcome to Day 07 of my 30 Days of JavaScript Challenge! Today, we're diving into the heart of interactive web development:

## DOM Manipulation and Event Handling.

**The Document Object Model (DOM)** is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

**Event handling** allows your JavaScript code to react to user actions (like clicks, key presses) or browser events.

For our project today, we'll build a Simple Image Carousel/Slider, which is an excellent way to practice dynamic DOM updates and event listening.

## 📚 Core Concepts Covered:

1.  **What is the DOM** (Document Object Model)?

The DOM is a tree-like representation of the content of a web page. Every HTML element, attribute, and piece of text becomes a "node" in this tree.

JavaScript can access and modify these nodes, thereby changing the web page.

- **Document:** 
The root of the DOM tree, representing the entire HTML document.

- **Element:**
HTML tags (e.g., &lt;div>, &lt;p>, &lt;img>) are represented as element nodes.

- **Text:**
The content inside elements is represented as text nodes.


**2. Accessing DOM Elements**To manipulate an element, you first need to select it.

<code>document.getElementById('idName'): </code>
Selects a single element by its unique id attribute. Returns null if not found.

Example:
```js
const myDiv = document.getElementById('myDiv');
```
--- 


<code>document.querySelector('selector'):</code>

Selects the first element that matches a specified CSS selector.

Example: 
```js
const firstParagraph = document.querySelector('p');
``` 
--- 

Example:
```js
 const myClassElement = document.querySelector('.my-class');document.
```
--- 

<code>querySelectorAll('selector'):</code>

Selects all elements that match a specified CSS selector. Returns a NodeList (which is like an array, but not exactly).

Example:

```js
const allButtons = document.querySelectorAll('button');
```
--- 

<code>document.getElementsByClassName('className'):</code>

Selects all elements with a specific class name. Returns an HTMLCollection.

Example:
```js
const allItems = document.getElementsByClassName('list-item');
```
--- 

<code>document.getElementsByTagName('tagName'):</code>

Selects all elements with a specific tag name. Returns an HTMLCollection.

Example:
```js
const allDivs = document.getElementsByTagName('div');
```


**3.  Modifying DOM Elements** Once you have an element, you can change its properties.

<code>element.textContent:</code>

 Gets or sets the text content of an element (plain text only).

Example:
```js
myDiv.textContent = 'New text here';
```
--- 

<code>element.innerHTML:</code>
Gets or sets the HTML content (can include HTML tags). Use with caution to avoid XSS vulnerabilities if dealing with untrusted user input.

Example:
```js
myDiv.innerHTML = '<strong>Bold text!</strong>';
```
--- 

<code>
element.setAttribute('attributeName', 'value'):
</code>
Sets the value of an attribute.

Example:
```js
myImage.setAttribute('src', 'new-image.jpg');
```
--- 

<code>element.removeAttribute('attributeName'):</code>

Removes an attribute.
Example:
```js
myImage.removeAttribute('alt');
```
--- 

<code>
element.classList.add('className');</code>
Adds a CSS class.

Example:
```js
myDiv.classList.add('active');
```
--- 

<code>
element.classList.remove('className'):
</code>
Removes a CSS class.

Example:
```js
myDiv.classList.remove('hidden');
```
--- 

<code>
element.classList.toggle('className'):
</code>
Toggles a CSS class (adds if not present, removes if present).

Example:
```js

myDiv.classList.toggle('highlight');
```
--- 

<code>
element.style.propertyName = 'value':
</code>
Sets inline CSS styles.

Example:
```js
myDiv.style.backgroundColor = 'blue';
```
--- 

 **4. Creating and Appending Elements** You can dynamically build new HTML elements and add them to the page.
<code>
document.createElement('tagName'):
</code>
Creates a new HTML element node.

Example:
```js
const newParagraph = document.createElement('p');
```
--- 

<code>
parentElement.appendChild(childElement):
</code>
Appends a child element to the end of a parent element.

Example:
```js
myDiv.appendChild(newParagraph);
```

---
<code>
parentElement.prepend(childElement):
</code>
 Adds a child element to the beginning of a parent element.

Example:
```js
 myDiv.prepend(newTitle);
```

---
<code>
parentElement.insertBefore(newElement, referenceElement):
</code>
Inserts newElement before referenceElement within parentElement.

Example:
```js
myList.insertBefore(newItem, myList.children[1]);
```
---
**5.  Removing Elements** Elements can be removed from the DOM.parentElement.
<code>
removeChild(childElement):
</code>
Removes a specified child element from its parent.

Example:
```js
myList.removeChild(itemToRemove);
```
---
<code>
element.remove() (Modern):
</code>

A simpler way to remove an element directly.

Example:
```js
itemToRemove.remove();
```
---
**6.  Event Handling** Events are actions that happen in the system you are programming, such as a user clicking a button, a page loading, or a video playing.
<code>
element.addEventListener('eventName', functionName):
</code>

- The primary way to register an event handler.eventName:

The type of event (e.g., 'click', 'mouseover', 'keydown', 'submit').

<code>functionName:</code>

- The function to execute when the event occurs (the "event handler" or "callback function").

**The Event Object:** When an event occurs, an <code>Event</code>  object is automatically passed to the event handler function. This object contains useful information about the event.
- <code>event.target:</code> The DOM element that triggered the event.

- <code>event.preventDefault():</code> Prevents the default action of an event (e.g., prevents a form from submitting, or a link from navigating).

Example:
```js
const myButton = document.getElementById('myButton');
myButton.addEventListener('click', function(event) {
console.log("Button clicked!");
console.log("Event target:", event.target);
});

```
---
## 🚀 Project for Day 07: Simple Image Carousel/Slider

Today's project is an interactive Image Carousel/Slider. 


This application will demonstrate how to dynamically change image sources, navigate through a collection of images, and handle user clicks to control the display.

**Features:**

- Display a main image.
- "Previous" and "Next" buttons to navigate through images.  
- Dynamic update of the image source.
- (Optional) Dot indicators to show current image position.- (Optional) Auto-play functionality.

(This project's code is located in index.html and index.js within this Day07 folder.)

## 📝 Project Logic Breakdown (index.js)

The index.js file manages the image data and controls the carousel's behavior.

1. Image Data (images Array)
```js
const images = [
{ src: 'https://placehold.co/600x400/FF5733/white?text=Image+1', alt: 'Red Abstract' },
{ src: 'https://placehold.co/600x400/33FF57/white?text=Image+2', alt: 'Green Abstract' },
{ src: 'https://placehold.co/600x400/3357FF/white?text=Image+3', alt: 'Blue Abstract' },
{ src: 'https://placehold.co/600x400/FF33FF/white?text=Image+4', alt: 'Purple Abstract' }
];

```
- This images array stores objects, where each object represents an image with its src (URL) and alt text. This is the source of all images for the carousel.

2. Global State <code>(currentImageIndex)</code>
```js
let currentImageIndex = 0;
```

- This variable keeps track of which image from the images array is currently being displayed. It starts at 0 for the first image.

3. DOM Element References 

```js
const carouselImage = document.getElementById('carouselImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer'); // For optional dots

```
- These variables provide easy access to the main image element, navigation buttons, and the container for dot indicators.

4. Core Application Functions  
a. <code>updateCarousel()</code>
**purpose**
- Updates the main image displayed and highlights the correct dot indicator.

**- How it works:** 
 - Sets <code>carouselImage.src</code> to <code>images[currentImageIndex].src.</code>>
 - Sets <code>carouselImage.alt</code> to <code>images[currentImageIndex].alt.</code>

- (For dots) Iterates through all dot indicators, removing the 'active' class from all, and then adding it to the dot corresponding to <code> currentImageIndex.</code>
 
 b. <code>showNextImage()</code>
**purpose**
- Moves to the next image in the carousel.

**- How it works:** 
 
 - Increments <code>currentImageIndex.</code>
>
 
 - If <code>> currentImageIndex </code> goes beyond the last image, it wraps around to 0 (the first image).
 
 - Calls <code>updateCarousel() </code>to display the new image.
 
 c. <code>showPrevImage()</code>
**purpose**
>
 Moves to the previous image in the carousel.
 
 **- How it works:** Decrements currentImageIndex.
 - If <code>currentImageIndex </code>>goes below 0, it wraps around to the last image <code>(images.length - 1)</code>.
 - Calls <code>updateCarousel()</code> to display the new image.
 
 d. <code>createDots()</code>(Optional)
 
 **- Purpose:**
 -  Dynamically creates dot indicators for each image.
 
 **- How it works:** 
 - Clears <code> dotsContainer.</code>
 
 - Uses<code> images.forEach() </code> to create a span element (dot) for each image.
 
 - Attaches a click listener to each dot to jump to that specific image <code> (currentImageIndex = index; updateCarousel();  </code>).
 
 - Appends the dots to dotsContainer.
 
 **e. Auto-play**(Optional)
 
 - Uses <code>setInterval(showNextImage, 3000)</code> to automatically advance the carousel every 3 seconds.
- <code>clearInterval()</code> can be used to stop it.

**5. Event Listeners (Connecting UI to Logic)**

```js

prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
createDots(); // Create dots first
updateCarousel(); // Display the first image
// setInterval(showNextImage, 3000); // Uncomment for auto-play
});
```

- <code>prevBtn.addEventListener('click', showPrevImage): </code>
 Calls <code>showPrevImage()</code> when the "Previous" button is clicked.
 
 - <code>nextBtn.addEventListener('click', showNextImage):</code> Calls <code>showNextImage() </code>when the "Next" button is clicked.
 - <code>DOMContentLoaded:</code> Ensures <code>createDots() </code> (if used)and <code>updateCarousel()</code> are called when the page is fully loaded, setting up the initial state of the carousel.
 
 
##  ✅ Practice Set :
 <details><summary>
1. Change Text Content:<!-- HTML -->
</summary>

```js
<p id="myParagraph">Hello World</p>
<button id="changeTextBtn">Change Text</button>

<!-- JavaScript -->
<script>
    const myParagraph = document.getElementById('myParagraph');
    const changeTextBtn = document.getElementById('changeTextBtn');

    changeTextBtn.addEventListener('click', () => {
        myParagraph.textContent = 'JavaScript is awesome!';
    });
</script>
```
</details>
<details><summary>
2. Toggle Class:

</summary>

```js

<!-- HTML -->
<div id="myBox" class="bg-blue-500 w-20 h-20 rounded-lg transition-colors duration-300"></div>
<button id="toggleClassBtn" class="mt-4 px-4 py-2 bg-gray-200 rounded-md">Toggle Color</button>

<!-- JavaScript -->
<script>
    const myBox = document.getElementById('myBox');
    const toggleClassBtn = document.getElementById('toggleClassBtn');

    toggleClassBtn.addEventListener('click', () => {
        myBox.classList.toggle('bg-red-500');
        myBox.classList.toggle('bg-blue-500'); // Toggle back to blue if red is removed
    });
</script>
```
</details>
<details><summary>
3. Create and Append Element:
</summary>

```js
<!-- HTML -->
<ul id="myList"></ul>
<button id="addItemsBtn" class="mt-4 px-4 py-2 bg-gray-200 rounded-md">Add List Items</button>

<!-- JavaScript -->
<script>
    const myList = document.getElementById('myList');
    const addItemsBtn = document.getElementById('addItemsBtn');

    addItemsBtn.addEventListener('click', () => {
        // Clear previous items if button is clicked multiple times
        myList.innerHTML = ''; 
        for (let i = 1; i <= 3; i++) {
            const newItem = document.createElement('li');
            newItem.textContent = `Item ${i}`;
            myList.appendChild(newItem);
        }
    });
</script>
```
</details>
<details><summary>
4. Remove Element:
</summary>

```js
<!-- HTML -->
   <button id="removeMe" class="px-4 py-2 bg-red-500 text-white rounded-md">Click to Remove Me</button>

<!-- JavaScript -->
<script>
    const removeMeBtn = document.getElementById('removeMe');

    removeMeBtn.addEventListener('click', () => {
        removeMeBtn.remove(); // Removes the button itself
    });
</script>
```
  </details>
  <details><summary>  
5. Input Text Display:
</summary>

```js
<!-- HTML -->
<input type="text" id="textInput" placeholder="Start typing..." class="p-2 border rounded-md">
<p id="displayText" class="mt-4 font-bold text-lg">You are typing: </p>

<!-- JavaScript -->
<script>
    const textInput = document.getElementById('textInput');
    const displayText = document.getElementById('displayText');

    textInput.addEventListener('input', () => {
        displayText.textContent = `You are typing: ${textInput.value}`;
    });
</script>
```
  </details>

### 💡 Key Takeaways for Day 07:


- The DOM is your JavaScript's gateway to interacting with web page content.
- You must first select elements before you can manipulate them.
- <code>textContent</code> for plain text, <code>innerHTML </code>for HTML content (use with caution).
- <code>classList</code> is powerful for managing CSS classes.

- <code>addEventListener()</code> is the standard way to make your page interactive by reacting to events.
- The Event object provides crucial information about what happened.
