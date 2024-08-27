// Mock Data for Cart and Wishlist
let cart = [];
let wishlist = [];

// Add to Cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        let productId = this.dataset.id;
        if (!cart.includes(productId)) {
            cart.push(productId);
            updateCart();
        }
    });
});

// Add to Wishlist
document.querySelectorAll('.add-to-wishlist').forEach(button => {
    button.addEventListener('click', function () {
        let productId = this.dataset.id;
        if (!wishlist.includes(productId)) {
            wishlist.push(productId);
            updateWishlist();
        }
    });
});

// Update Cart
function updateCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = `<p>Items in Cart: ${cart.length}</p>`;
}

// Update Wishlist
function updateWishlist() {
    const wishlistContainer = document.querySelector('.wishlist-container');
    wishlistContainer.innerHTML = `<p>Items in Wishlist: ${wishlist.length}</p>`;
}
