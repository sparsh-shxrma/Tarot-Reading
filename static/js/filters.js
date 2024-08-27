// Filter Functionality
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search');
    const typeSelect = document.getElementById('type');
    const priceRange = document.getElementById('price');
    const priceRangeLabel = document.getElementById('price-range');

    // Example product data (you would replace this with real data from your server or database)
    const products = [
        { id: '1', name: 'Amethyst', type: 'healing', price: 1200, imgSrc: '/static/images/crystals/product_images/amethyst.jpg' },
        { id: '2', name: 'Rose Quartz', type: 'love', price: 1500, imgSrc: '/static/images/crystals/product_images/rose_quartz.jpg' },
        // Add more products as needed
    ];

    // Function to display products
    function displayProducts(productsToDisplay) {
        const productList = document.querySelector('.product-list');
        productList.innerHTML = ''; // Clear existing products

        productsToDisplay.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.classList.add('animate__animated');
            productItem.classList.add('animate__fadeInUp');
            productItem.innerHTML = `
                <img src="${product.imgSrc}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Metaphysical Properties: ${product.type.charAt(0).toUpperCase() + product.type.slice(1)}</p>
                <p>₹${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="add-to-wishlist" data-id="${product.id}">Add to Wishlist</button>
            `;
            productList.appendChild(productItem);
        });
    }

    // Function to filter products
    function filterProducts() {
        let filteredProducts = products;

        // Search filter
        const searchQuery = searchInput.value.toLowerCase();
        if (searchQuery) {
            filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchQuery));
        }

        // Type filter
        const selectedType = typeSelect.value;
        if (selectedType !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.type === selectedType);
        }

        // Price filter
        const maxPrice = parseInt(priceRange.value);
        filteredProducts = filteredProducts.filter(product => product.price <= maxPrice);

        // Update price range label
        priceRangeLabel.textContent = `Up to ₹${maxPrice}`;

        // Display filtered products
        displayProducts(filteredProducts);
    }

    // Event listeners
    searchInput.addEventListener('input', filterProducts);
    typeSelect.addEventListener('change', filterProducts);
    priceRange.addEventListener('input', filterProducts);

    // Initial display
    displayProducts(products);
});
