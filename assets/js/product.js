// Product Data Store for VRS
// This file contains all product information organized by category

const products = [
  // Protection Category
  {
    id: 1,
    name: "Ultra Slim Phone Case",
    category: "phone-cases",
    price: 15.99,
    image: "phonecase.png",
    description: "Ultra-thin, lightweight protection with a matte finish."
  },
  {
    id: 2,
    name: "Rugged Armor Phone Case",
    category: "phone-cases",
    price: 19.99,
    image: "phonecase.png",
    description: "Heavy-duty protection with shock-absorbing technology."
  },
  {
    id: 3,
    name: "Clear Transparent Case",
    category: "phone-cases",
    price: 12.99,
    image: "phonecase.png",
    description: "Crystal clear case that shows off your phone's design."
  },
  {
    id: 4,
    name: "Samsung Galaxy S24 Case",
    category: "samsung-cases",
    price: 17.99,
    image: "samsung-case.png",
    description: "Perfect fit case for Samsung Galaxy S24 series."
  },
  {
    id: 5,
    name: "Samsung A Series Case",
    category: "samsung-cases",
    price: 14.99,
    image: "samsung-case.png",
    description: "Stylish protection for Samsung A series phones."
  },
  {
    id: 6,
    name: "Tempered Glass Screen Protector",
    category: "screen-protectors",
    price: 9.99,
    image: "screenprotector.png",
    description: "9H hardness tempered glass for maximum screen protection."
  },
  {
    id: 7,
    name: "Privacy Screen Protector",
    category: "screen-protectors",
    price: 14.99,
    image: "screenprotector.png",
    description: "Protects your screen and keeps your content private."
  },
  {
    id: 8,
    name: "Camera Lens Protector",
    category: "camera-protectors",
    price: 7.99,
    image: "cameraprotector.png",
    description: "Protects camera lenses from scratches and damage."
  },
  {
    id: 9,
    name: "Full Camera Protection Kit",
    category: "camera-protectors",
    price: 12.99,
    image: "cameraprotector.png",
    description: "Complete camera lens protection with multiple layers."
  },

  // Charging Category
  {
    id: 10,
    name: "Fast Wall Charger 20W",
    category: "chargers",
    price: 24.99,
    image: "charger.png",
    description: "Quick charge adapter with 20W power output."
  },
  {
    id: 11,
    name: "Dual Port USB Charger",
    category: "chargers",
    price: 29.99,
    image: "charger.png",
    description: "Charge two devices simultaneously with smart power distribution."
  },
  {
    id: 12,
    name: "Wireless Charging Pad",
    category: "wireless-chargers",
    price: 19.99,
    image: "wirelesscharging.png",
    description: "Slim wireless charging pad compatible with Qi-enabled devices."
  },
  {
    id: 13,
    name: "Fast Wireless Charger Stand",
    category: "wireless-chargers",
    price: 34.99,
    image: "wirelesscharging.png",
    description: "Stand-style wireless charger with fast charging support."
  },
  {
    id: 14,
    name: "Power Bank 10000mAh",
    category: "power-banks",
    price: 39.99,
    image: "powerbank.png",
    description: "Compact portable charger with 10000mAh capacity."
  },
  {
    id: 15,
    name: "Power Bank 20000mAh",
    category: "power-banks",
    price: 54.99,
    image: "powerbank.png",
    description: "High-capacity power bank for extended charging on the go."
  },
  {
    id: 16,
    name: "USB-C Fast Charging Cable",
    category: "charging-cables",
    price: 12.99,
    image: "fastchargecable.png",
    description: "Durable USB-C cable with fast charging support."
  },
  {
    id: 17,
    name: "Lightning Cable",
    category: "charging-cables",
    price: 14.99,
    image: "fastchargecable.png",
    description: "MFi certified Lightning cable for Apple devices."
  },
  {
    id: 18,
    name: "Multi-Port Charging Cable",
    category: "charging-cables",
    price: 16.99,
    image: "fastchargecable.png",
    description: "3-in-1 cable with USB-C, Lightning, and Micro-USB connectors."
  },

  // Audio Category
  {
    id: 19,
    name: "Wired Earphones",
    category: "earphones",
    price: 19.99,
    image: "earphones.png",
    description: "Classic wired earphones with clear sound quality."
  },
  {
    id: 20,
    name: "In-Ear Earphones with Mic",
    category: "earphones",
    price: 24.99,
    image: "earphones.png",
    description: "Comfortable in-ear design with built-in microphone."
  },
  {
    id: 21,
    name: "Over-Ear Headphones",
    category: "headphones",
    price: 59.99,
    image: "headphones.png",
    description: "Comfortable over-ear headphones with noise isolation."
  },
  {
    id: 22,
    name: "Wireless Bluetooth Headphones",
    category: "headphones",
    price: 79.99,
    image: "headphones.png",
    description: "Premium wireless headphones with long battery life."
  },
  {
    id: 23,
    name: "True Wireless Earbuds",
    category: "wireless-earbuds",
    price: 49.99,
    image: "earbuds.png",
    description: "Compact true wireless earbuds with charging case."
  },
  {
    id: 24,
    name: "Pro Wireless Earbuds",
    category: "wireless-earbuds",
    price: 89.99,
    image: "earbuds.png",
    description: "Premium earbuds with active noise cancellation."
  },
  {
    id: 25,
    name: "Portable Bluetooth Speaker",
    category: "bluetooth-speaker",
    price: 44.99,
    image: "bluetooth-speaker.png",
    description: "Compact speaker with powerful sound and bass."
  },
  {
    id: 26,
    name: "Mini Bluetooth Speaker",
    category: "bluetooth-speaker",
    price: 29.99,
    image: "bluetooth-speaker.png",
    description: "Ultra-portable speaker perfect for travel."
  },

  // Daily Accessories Category
  {
    id: 27,
    name: "Adjustable Phone Stand",
    category: "phone-stands",
    price: 14.99,
    image: "phonestand.png",
    description: "Foldable stand with adjustable viewing angles."
  },
  {
    id: 28,
    name: "Desktop Phone Holder",
    category: "phone-stands",
    price: 19.99,
    image: "phonestand.png",
    description: "Sturdy desktop stand for hands-free use."
  },
  {
    id: 29,
    name: "Car Phone Holder Mount",
    category: "car-holders",
    price: 24.99,
    image: "carholder.png",
    description: "Secure car mount with easy one-hand operation."
  },
  {
    id: 30,
    name: "Magnetic Car Holder",
    category: "car-holders",
    price: 19.99,
    image: "carholder.png",
    description: "Strong magnetic holder for quick phone attachment."
  },
  {
    id: 31,
    name: "Smart Watch Fitness Tracker",
    category: "smart-watches",
    price: 69.99,
    image: "smartwatch.png",
    description: "Feature-rich fitness tracker with heart rate monitor."
  },
  {
    id: 32,
    name: "Smart Watch Pro",
    category: "smart-watches",
    price: 129.99,
    image: "smartwatch.png",
    description: "Advanced smartwatch with GPS and health tracking."
  }
];

// Helper functions to work with products

/**
 * Get all products
 * @returns {Array} All products
 */
function getAllProducts() {
  return products;
}

/**
 * Get products by category
 * @param {string} category - The category to filter by
 * @returns {Array} Products matching the category
 */
function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

/**
 * Get a single product by ID
 * @param {number} id - The product ID
 * @returns {Object|undefined} The product or undefined if not found
 */
function getProductById(id) {
  return products.find(product => product.id === id);
}

/**
 * Search products by name
 * @param {string} searchTerm - The search term
 * @returns {Array} Products matching the search term
 */
function searchProducts(searchTerm) {
  const term = searchTerm.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(term) ||
    product.description.toLowerCase().includes(term)
  );
}

/**
 * Get products within a price range
 * @param {number} minPrice - Minimum price
 * @param {number} maxPrice - Maximum price
 * @returns {Array} Products within the price range
 */
function getProductsByPriceRange(minPrice, maxPrice) {
  return products.filter(product => 
    product.price >= minPrice && product.price <= maxPrice
  );
}

/**
 * Get all unique categories
 * @returns {Array} Array of unique category names
 */
function getAllCategories() {
  return [...new Set(products.map(product => product.category))];
}

/**
 * Format price for display
 * @param {number} price - The price to format
 * @returns {string} Formatted price string
 */
function formatPrice(price) {
  return '$' + price.toFixed(2);
}

/**
 * Generate HTML for a product card
 * @param {Object} product - The product object
 * @param {string} imagePath - Base path for images (default: '../assets/images/products/')
 * @returns {string} HTML string for the product card
 */
function generateProductCard(product, imagePath = '../assets/images/products/') {
  return `
    <div class="col-lg-3 col-md-6">
      <a href="product-details.html?id=${product.id}" class="text-decoration-none text-dark">
        <div class="card h-100 text-center product-card">
          <img
            src="${imagePath}${product.image}"
            class="card-img-top"
            alt="${product.name}"
          />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text text-muted">${product.description}</p>
            <p class="fw-bold text-primary">${formatPrice(product.price)}</p>
          </div>
        </div>
      </a>
    </div>
  `;
}

/**
 * Render products to a container element
 * @param {string} containerId - The ID of the container element
 * @param {Array} productsToRender - Array of products to render
 * @param {string} imagePath - Base path for images
 */
function renderProducts(containerId, productsToRender, imagePath = '../assets/images/products/') {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID "${containerId}" not found.`);
    return;
  }
  
  container.innerHTML = productsToRender
    .map(product => generateProductCard(product, imagePath))
    .join('');
}
