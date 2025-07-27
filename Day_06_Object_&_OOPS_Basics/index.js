// Day 06 Project: Simple Product Catalog Viewer

// --- Product Data (Array of Objects) ---
const products = [
  {
    id: "p001",
    name: "Laptop Pro X",
    category: "Electronics",
    price: 1200,
    description:
      "High-performance laptop with 16GB RAM, 512GB SSD, and a stunning 15-inch display. Perfect for professionals and gamers.",
    image: "https://placehold.co/150x150/007bff/ffffff?text=Laptop",
  },
  {
    id: "p002",
    name: "Wireless Headphones",
    category: "Audio",
    price: 150,
    description:
      "Noise-cancelling wireless headphones with 30-hour battery life and crisp audio quality.",
    image: "https://placehold.co/150x150/28a745/ffffff?text=Headphones",
  },
  {
    id: "p003",
    name: "Smartwatch Series 5",
    category: "Wearables",
    price: 299,
    description:
      "Track your fitness, receive notifications, and make calls directly from your wrist. Water-resistant.",
    image: "https://placehold.co/150x150/ffc107/000000?text=Smartwatch",
  },
  {
    id: "p004",
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 95,
    description:
      "Durable mechanical keyboard with customizable RGB backlighting and tactile switches for an optimal typing experience.",
    image: "https://placehold.co/150x150/dc3545/ffffff?text=Keyboard",
  },
  {
    id: "p005",
    name: "Portable Bluetooth Speaker",
    category: "Audio",
    price: 75,
    description:
      "Compact and powerful Bluetooth speaker with rich bass and 10-hour playtime. Ideal for outdoor adventures.",
    image: "https://placehold.co/150x150/17a2b8/ffffff?text=Speaker",
  },
  {
    id: "p006",
    name: "External SSD 1TB",
    category: "Electronics",
    price: 180,
    description:
      "Ultra-fast external SSD for quick data transfers and reliable backup. USB-C compatible.",
    image: "https://placehold.co/150x150/6f42c1/ffffff?text=SSD",
  },
  {
    id: "p007",
    name: "Gaming Mouse",
    category: "Accessories",
    price: 60,
    description:
      "Ergonomic gaming mouse with adjustable DPI, programmable buttons, and vibrant LED lighting.",
    image: "https://placehold.co/150x150/fd7e14/ffffff?text=Mouse",
  },
];

// --- DOM Element References ---
const productListDiv = document.getElementById("productList");
const productDetailDiv = document.getElementById("productDetail");
const categoryFilter = document.getElementById("categoryFilter");
const clearDetailsBtn = document.getElementById("clearDetailsBtn");
const initialDetailMessage = document.getElementById("initialDetailMessage");

// --- Functions ---

/**
 * Renders the list of products based on the selected category filter.
 * @param {string} filterCategory - The category to filter by ('All' for no filter).
 */
function renderProductList(filterCategory = "All") {
  productListDiv.innerHTML = ""; // Clear existing product cards

  // Filter products if a specific category is selected
  const filteredProducts =
    filterCategory === "All"
      ? products
      : products.filter((product) => product.category === filterCategory);

  if (filteredProducts.length === 0) {
    productListDiv.innerHTML =
      '<p class="empty-list-message">No products found in this category.</p>';
    return;
  }

  // Use forEach to iterate over the filtered products and create HTML for each
  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.dataset.productId = product.id; // Store product ID for easy access

    productCard.innerHTML = `
            <img src="${product.image}" alt="${
      product.name
    }" onerror="this.onerror=null;this.src='https://placehold.co/150x150/6c757d/ffffff?text=No+Image';">
            <h3>${product.name}</h3>
            <p>${product.category}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
        `;

    // Add event listener to each product card to show details
    productCard.addEventListener("click", () => showProductDetails(product.id));

    productListDiv.appendChild(productCard);
  });
}

/**
 * Displays the detailed information of a selected product.
 * @param {string} productId - The ID of the product to display.
 */
function showProductDetails(productId) {
  // Use find() array method to get the product object from the 'products' array
  const product = products.find((p) => p.id === productId);

  if (product) {
    // Populate the product detail div with product object properties
    productDetailDiv.innerHTML = `
            <img src="${product.image}" alt="${
      product.name
    }" onerror="this.onerror=null;this.src='https://placehold.co/200x200/6c757d/ffffff?text=No+Image';">
            <h2>${product.name}</h2>
            <p class="category">${product.category}</p>
            <p class="price-detail">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            <button id="clearDetailsBtn" class="btn-clear-details mt-6">Clear Details</button>
        `;
    productDetailDiv.classList.remove("hidden"); // Show the detail section
    initialDetailMessage.classList.add("hidden"); // Hide initial message

    // Re-attach event listener for the new clear details button
    document
      .getElementById("clearDetailsBtn")
      .addEventListener("click", clearProductDetails);
  } else {
    productDetailDiv.innerHTML =
      '<p class="text-center text-red-400">Product not found!</p>';
    productDetailDiv.classList.remove("hidden");
    initialDetailMessage.classList.add("hidden");
    // No clear button if product not found, user can click another product
  }
}

/**
 * Clears the product detail section and shows the initial message.
 */
function clearProductDetails() {
  productDetailDiv.innerHTML = ""; // Clear content
  productDetailDiv.classList.add("hidden"); // Hide the detail section
  initialDetailMessage.classList.remove("hidden"); // Show initial message
}

/**
 * Populates the category filter dropdown with unique categories from the products data.
 */
function populateCategories() {
  // Get all categories using map, then use Set to get unique categories
  const uniqueCategories = [
    ...new Set(products.map((product) => product.category)),
  ];

  // Create and append option elements for each unique category
  uniqueCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// --- Event Listeners ---

// Listen for changes on the category filter dropdown
categoryFilter.addEventListener("change", (event) => {
  renderProductList(event.target.value); // Re-render list with new filter
  clearProductDetails(); // Clear details when filter changes
});

// --- Initial Setup on Page Load ---
document.addEventListener("DOMContentLoaded", () => {
  populateCategories(); // First, populate the filter dropdown
  renderProductList(); // Then, render the initial product list (all products)
});
