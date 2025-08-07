
// --- Data Structures ---
const uniqueItems = new Set(); // Stores unique items
const productMap = new Map(); // Stores product codes (keys) to product names (values)

// --- DOM Element References - Set Section ---
const setItemInput = document.getElementById("setItemInput");
const addSetBtn = document.getElementById("addSetBtn");
const checkSetBtn = document.getElementById("checkSetBtn");
const removeSetBtn = document.getElementById("removeSetBtn");
const setResultMsg = document.getElementById("setResultMsg");
const setListDisplay = document.getElementById("setListDisplay");
const setSizeDisplay = document.getElementById("setSizeDisplay");

// --- DOM Element References - Map Section ---
const mapKeyCodeInput = document.getElementById("mapKeyCodeInput");
const mapValueInput = document.getElementById("mapValueInput");
const addMapBtn = document.getElementById("addMapBtn");
const mapGetCodeInput = document.getElementById("mapGetCodeInput");
const getMapBtn = document.getElementById("getMapBtn");
const removeMapBtn = document.getElementById("removeMapBtn");
const mapResultMsg = document.getElementById("mapResultMsg");
const mapListDisplay = document.getElementById("mapListDisplay");
const mapSizeDisplay = document.getElementById("mapSizeDisplay");

// --- Helper Functions for UI Messages ---

/**
 * Displays a temporary message in the Set section.
 * @param {string} message The message to display.
 * @param {boolean} isSuccess Whether the message indicates success (green) or error (red).
 */
function showSetMessage(message, isSuccess = true) {
  setResultMsg.textContent = message;
  setResultMsg.classList.remove("hidden", "bg-red-700", "bg-green-700");
  setResultMsg.classList.add(isSuccess ? "bg-green-700" : "bg-red-700");
  setTimeout(() => {
    setResultMsg.classList.add("hidden");
  }, 2000);
}

/**
 * Displays a temporary message in the Map section.
 * @param {string} message The message to display.
 * @param {boolean} isSuccess Whether the message indicates success (green) or error (red).
 */
function showMapMessage(message, isSuccess = true) {
  mapResultMsg.textContent = message;
  mapResultMsg.classList.remove("hidden", "bg-red-700", "bg-green-700");
  mapResultMsg.classList.add(isSuccess ? "bg-green-700" : "bg-red-700");
  setTimeout(() => {
    mapResultMsg.classList.add("hidden");
  }, 2000);
}

// --- Set Operations ---

/**
 * Adds a unique item to the Set and updates the display.
 */
function addUniqueItem() {
  const item = setItemInput.value.trim();
  if (item) {
    if (uniqueItems.has(item)) {
      showSetMessage(`"${item}" already exists in the Set.`, false);
    } else {
      uniqueItems.add(item);
      showSetMessage(`"${item}" added to Set.`);
      setItemInput.value = ""; // Clear input
    }
    renderSetDisplay();
  } else {
    showSetMessage("Please enter an item to add.", false);
  }
}

/**
 * Checks if an item exists in the Set and displays the result.
 */
function checkUniqueItem() {
  const item = setItemInput.value.trim();
  if (item) {
    if (uniqueItems.has(item)) {
      showSetMessage(`"${item}" is IN the Set.`);
    } else {
      showSetMessage(`"${item}" is NOT in the Set.`, false);
    }
  } else {
    showSetMessage("Please enter an item to check.", false);
  }
}

/**
 * Removes an item from the Set and updates the display.
 */
function removeUniqueItem() {
  const item = setItemInput.value.trim();
  if (item) {
    if (uniqueItems.delete(item)) {
      showSetMessage(`"${item}" removed from Set.`);
      setItemInput.value = ""; // Clear input
    } else {
      showSetMessage(`"${item}" not found in the Set.`, false);
    }
    renderSetDisplay();
  } else {
    showSetMessage("Please enter an item to remove.", false);
  }
}

/**
 * Renders the current contents of the Set to the UI.
 */
function renderSetDisplay() {
  setListDisplay.innerHTML = ""; // Clear current list
  if (uniqueItems.size === 0) {
    setListDisplay.innerHTML =
      '<li class="text-gray-400 italic">No unique items yet.</li>';
  } else {
    uniqueItems.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      setListDisplay.appendChild(li);
    });
  }
  setSizeDisplay.textContent = `Size: ${uniqueItems.size}`;
}

// --- Map Operations ---

/**
 * Adds or updates a product (key-value pair) in the Map.
 */
function addProduct() {
  const code = mapKeyCodeInput.value.trim();
  const name = mapValueInput.value.trim();
  if (code && name) {
    productMap.set(code, name);
    showMapMessage(`Product "${name}" (${code}) added/updated.`);
    mapKeyCodeInput.value = "";
    mapValueInput.value = "";
    renderMapDisplay();
  } else {
    showMapMessage("Please enter both code and name.", false);
  }
}

/**
 * Retrieves and displays a product name from the Map by its code.
 */
function getProduct() {
  const code = mapGetCodeInput.value.trim();
  if (code) {
    const name = productMap.get(code);
    if (name !== undefined) {
      showMapMessage(`Product Name for "${code}": "${name}"`);
    } else {
      showMapMessage(`Product with code "${code}" not found.`, false);
    }
  } else {
    showMapMessage("Please enter a code to get.", false);
  }
}

/**
 * Removes a product from the Map by its code.
 */
function removeProduct() {
  const code = mapGetCodeInput.value.trim();
  if (code) {
    if (productMap.delete(code)) {
      showMapMessage(`Product with code "${code}" removed.`);
      mapGetCodeInput.value = "";
    } else {
      showMapMessage(`Product with code "${code}" not found.`, false);
    }
    renderMapDisplay();
  } else {
    showMapMessage("Please enter a code to remove.", false);
  }
}

/**
 * Renders the current contents of the Map to the UI.
 */
function renderMapDisplay() {
  mapListDisplay.innerHTML = ""; // Clear current list
  if (productMap.size === 0) {
    mapListDisplay.innerHTML =
      '<li class="text-gray-400 italic">No products yet.</li>';
  } else {
    productMap.forEach((value, key) => {
      // Map's forEach gives value, then key
      const li = document.createElement("li");
      li.textContent = `Code: ${key}, Name: ${value}`;
      mapListDisplay.appendChild(li);
    });
  }
  mapSizeDisplay.textContent = `Size: ${productMap.size}`;
}

// --- Event Listeners ---

// Set Section Buttons
addSetBtn.addEventListener("click", addUniqueItem);
checkSetBtn.addEventListener("click", checkUniqueItem);
removeSetBtn.addEventListener("click", removeUniqueItem);

// Map Section Buttons
addMapBtn.addEventListener("click", addProduct);
getMapBtn.addEventListener("click", getProduct);
removeMapBtn.addEventListener("click", removeProduct);

// --- Initial Render on Page Load ---
document.addEventListener("DOMContentLoaded", () => {
  renderSetDisplay();
  renderMapDisplay();
});
