
        // --- State and Data ---
        const products = [
            { id: 1, name: 'Laptop', price: 1200.00 },
            { id: 2, name: 'Mouse', price: 25.00 },
            { id: 3, name: 'Keyboard', price: 75.00 },
            { id: 4, name: 'Monitor', price: 300.00 },
        ];

        let cart = []; // The shopping cart, will be an array of item objects.

        // --- DOM Elements ---
        const productListEl = document.getElementById('product-list');
        const cartListEl = document.getElementById('cart-list');
        const totalPriceEl = document.getElementById('total-price');

        // --- Functions ---

        /**
         * Renders the list of products on the page.
         * We use Template Literals here to easily create the HTML for each product.
         */
        function renderProducts() {
            productListEl.innerHTML = products.map(product => `
                <div class="bg-gray-100 p-6 rounded-xl flex flex-col justify-between items-center text-center">
                    <h3 class="text-xl font-semibold">${product.name}</h3>
                    <p class="text-gray-600 my-2">$${product.price.toFixed(2)}</p>
                    <button data-product-id="${product.id}" class="add-to-cart-btn bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-colors duration-200 mt-4">
                        Add to Cart
                    </button>
                </div>
            `).join('');
        }

        /**
         * Renders the cart and updates the total price.
         * We use the Spread Operator and Template Literals.
         */
        function renderCart() {
            // Use .map to transform each item in the cart array into an HTML string.
            cartListEl.innerHTML = cart.map(item => `
                <li class="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                    <span class="font-medium">${item.name} x ${item.quantity}</span>
                    <span>$${(item.price * item.quantity).toFixed(2)}</span>
                </li>
            `).join('');

            // Calculate the total price using .reduce
            const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            totalPriceEl.textContent = `$${total.toFixed(2)}`;
        }

        /**
         * Adds an item to the cart or updates its quantity.
         * We use the Spread Operator for immutable state updates.
         * @param {number} productId The ID of the product to add.
         */
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                // If the item exists, create a NEW cart array with the updated quantity.
                // We use .map() and the Spread Operator to achieve this immutably.
                cart = cart.map(item =>
                    item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // If the item is new, create a NEW cart array by spreading the old one
                // and adding the new item object.
                cart = [...cart, { ...product, quantity: 1 }];
            }

            renderCart(); // Re-render the cart after the update.
        }

        // --- Event Listeners ---
        // Use event delegation on the product list to handle button clicks.
        productListEl.addEventListener('click', event => {
            if (event.target.classList.contains('add-to-cart-btn')) {
                const productId = parseInt(event.target.dataset.productId);
                addToCart(productId);
            }
        });

        // --- Initial Render ---
        renderProducts();
        renderCart();
